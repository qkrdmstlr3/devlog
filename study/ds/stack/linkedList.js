class Node {
  constructor(item) {
    this.next = undefined;
    this.prev = undefined;
    this.item = item;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node(undefined);
    this.tail = this.head;
    this.count = 0;
  }

  push(item) {
    const newNode = new Node(item);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.count += 1;
  }

  pop() {
    if (this.count === 0) {
      return "list is empty";
    }
    const result = this.tail.item;
    this.tail = this.tail.prev;
    this.tail.next = undefined;
    this.count -= 1;
    return result;
  }

  size() {
    return this.count;
  }

  print() {
    let point = this.head;
    const result = [];
    for (let i = 0; i < this.count; i++) {
      point = point.next;
      result.push(point.item);
    }
    console.log(result);
  }
}

const linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.print();
linkedList.pop();
linkedList.print();
linkedList.push(4);
linkedList.print();
