class Node:
  def __init__(self, item):
    self.next = None
    self.prev = None
    self.item = item

class LinkedList:
  def __init__(self):
    self.head = Node(None)
    self.front = self.head
    self.count = 0

  def push(self, item):
    newNode = Node(item)
    newNode.prev = self.front
    self.front.next = newNode
    self.front = newNode
    self.count += 1

  def pop(self):
    if self.count == 0:
      return 'list is empty'
    result = self.front.item
    self.front = self.front.prev
    self.front.next = None
    self.count -= 1
    return result

  def size(self):
    return self.count

  def printList(self):
    point = self.head
    result = []
    for i in range(self.count):
      point = point.next
      result.append(point.item)
    print(result)

linkedList = LinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.printList();
linkedList.pop();
linkedList.printList();
linkedList.push(4);
linkedList.printList();
