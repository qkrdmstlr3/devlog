// Logic
class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  count() {
    return this.stack.length;
  }

  contains(item) {
    return this.stack.some((s) => s === item);
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

// Text
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.count());
console.log(stack.pop());
console.log(stack.count());
console.log(stack.contains(2));
console.log(stack.contains(3));
