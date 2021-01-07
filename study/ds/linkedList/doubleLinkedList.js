class Node {
  constructor(item) {
    this.next = undefined;
    this.prev = undefined;
    this.item = item;
  }
}

class DblLinkedList {
  constructor() {
    this.head = new Node(undefined);
    this.tail = this.head;
    this.count = 0;
  }

  getPointer(position) {
    let point = this.head;
    for (let i = 0; i < position; i++) {
      point = point.next;
    }
    return point;
  }

  push(item, position) {
    if (position > this.count) {
      return;
    }
    const newNode = new Node(item);
    this.count += 1;
    if (!position) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      return;
    }

    const point = this.getPointer(position);
    newNode.next = point;
    newNode.prev = point.prev;
    point.prev.next = newNode;
    point.prev = newNode;
  }

  pop(position) {
    if (this.count === 0) {
      return "list is empty";
    }
    this.count -= 1;
    if (!position) {
      const result = this.tail.item;
      this.tail = this.tail.prev;
      this.tail.next = undefined;
      return result;
    }

    const point = this.getPointer(position);
    point.prev.next = point.next;
    point.next.prev = point.prev;
    return point.item;
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

const linkedList = new DblLinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3, 2);
linkedList.push(4);
linkedList.print();
linkedList.pop(2);
linkedList.print();
