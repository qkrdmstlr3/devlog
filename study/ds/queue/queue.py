# https://docs.python.org/ko/3.7/library/queue.html
# Logic
class Queue:
  def __init__(self):
    self.queue = []

  def put(self, item):
    self.queue.append(item)

  def get(self):
    return self.queue.pop(0)

  def size(self):
    return len(self.queue)

  def contains(self, item):
    if item in self.queue:
      return True
    return False

  def isEmpty(self):
    return len(self.queue) == 0

# Test
queue = Queue()
queue.put(1)
queue.put(2)
queue.put(3)
print(queue.size())
print(queue.get())
print(queue.size())
print(queue.contains(1))
print(queue.contains(3))
