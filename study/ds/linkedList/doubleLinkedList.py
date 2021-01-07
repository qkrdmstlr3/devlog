class Node:
  def __init__(self, item):
    self.next = None
    self.prev = None
    self.item = item

class DblLinkedList:
  def __init__(self):
    self.head = Node(None)
    self.tail = self.head
    self.count = 0

  def getPointer(self, position):
    point = self.head
    for i in range(position):
      point = point.next
    return point

  def push(self, item, position):
    if position > self.count:
      return
    newNode = Node(item)
    self.count += 1
    if position is None:
      newNode.prev = self.tail
      self.tail.next = newNode
      self.tail = newNode
      return
    
    point = self.getPointer(position)
    newNode.next = point
    newNode.prev = point.prev
    point.prev.next = newNode
    point.prev = newNode

  def pop(self, position):
    if self.count == 0:
      return 'list is empty'
    self.count -= 1
    if position is None:
      result = self.tail.item
      self.tail = self.tail.prev
      self.tail.next = None
      return result

    point = self.getPointer(position)
    point.prev.next = point.next
    point.next.prev = point.prev
    return point.item

  def printList(self):
    point = self.head
    result = []
    for i in range(self.count):
      point = point.next
      result.append(point.item)
    print(result)
    
linkedList = DblLinkedList();
linkedList.push(1, None);
linkedList.push(2, None);
linkedList.push(3, 2);
linkedList.push(4, None);
linkedList.printList();
linkedList.pop(2);
linkedList.printList();
