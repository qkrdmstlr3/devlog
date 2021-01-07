class Node:
  def __init__(self, item):
    self.next = None
    self.item = item

class LinkedList:
  def __init__(self):
    self.head = Node(None)
    self.tail = self.head
    self.count = 0

  def put(self, item):
    newNode = Node(item)
    self.tail.next = newNode
    self.tail = newNode
    self.count += 1

  def get(self):
    if self.count == 0:
      return 'list is empty'
    elif self.count - 1 == 0:
      self.tail = self.head
    result = self.head.next.item
    self.head.next = self.head.next.next
    self.count -= 1
    return result
  
  def printList(self):
    point = self.head
    result = []
    for i in range(self.count):
      point = point.next
      result.append(point.item)
    print(result)

linkedList = LinkedList();
linkedList.put(1);
linkedList.put(2);
linkedList.put(3);
linkedList.printList();
linkedList.get();
linkedList.get();
linkedList.get();
linkedList.get();
linkedList.printList();
linkedList.put(4);
linkedList.printList();
