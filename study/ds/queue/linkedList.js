class Node {
  constructor(item) {
    this.next = undefined;
    this.item = item;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node(undefined);
    this.tail = this.head;
    this.count = 0;
  }

  put(item) {
    const newNode = new Node(item);
    this.tail.next = newNode;
    this.tail = newNode;
    this.count += 1;
  }

  get() {
    if (this.count === 0) {
      return "list is empty";
    } else if (this.count - 1 === 0) {
      this.tail = this.head;
    }
    const result = this.head.next.item;
    this.head.next = this.head.next.next;
    this.count -= 1;
    return result;
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
linkedList.put(1);
linkedList.put(2);
linkedList.put(3);
linkedList.print();
linkedList.get();
linkedList.get();
linkedList.get();
linkedList.get();
linkedList.print();
linkedList.put(4);
linkedList.print();
