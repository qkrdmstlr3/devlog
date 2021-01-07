# https://www.javatpoint.com/data-structure-stack
# Logic
class Stack:
  def __init__(self):
    self.stack = []

  def push(self, item):
    self.stack.append(item)

  def pop(self):
    return self.stack.pop()
    
  def count(self):
    return len(self.stack)

  def contains(self, item):
    if item in self.stack:
      return True
    return False
  
  def isEmpty(self, item):
    return len(self.stack) == 0

# Test
stack = Stack();
stack.push(1)
stack.push(2)
stack.push(3)
print(stack.count())
print(stack.pop())
print(stack.count())
