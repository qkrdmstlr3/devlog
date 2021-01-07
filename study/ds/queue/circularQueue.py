# https://lktprogrammer.tistory.com/59
# Logic
class CircularQueue:
  front = 0
  rear = 0
  count = 0

  def __init__(self, size):
    self.queue = [0] * size
    self.size = size

  def enqueue(self, item):
    if(self.count == self.size):
      return 'list is full'
    self.rear = (self.rear + 1) % self.size
    self.queue[self.rear] = item
    self.count += 1
    return 'success'

  def dequeue(self):
    if(self.count == 0):
      return 'list is empty'
    self.front = (self.front + 1) % self.size
    self.count -= 1
    return self.queue[self.front]

  def printQueue(self):
    print(self.queue)

circularQueue = CircularQueue(4)
print(circularQueue.dequeue())
print(circularQueue.enqueue(1))
print(circularQueue.enqueue(2))
print(circularQueue.enqueue(3))
print(circularQueue.enqueue(4))
circularQueue.printQueue()
print(circularQueue.dequeue())
print(circularQueue.dequeue())
print(circularQueue.enqueue(5))
print(circularQueue.enqueue(6))
circularQueue.printQueue()
