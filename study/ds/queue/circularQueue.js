// Logic
class CircularQueue {
  front = 0;
  rear = 0;
  count = 0;

  constructor(size) {
    this.queue = new Array(size);
  }

  enqueue(item) {
    if (this.count === this.queue.length) {
      return "list is full";
    }
    this.rear = (this.rear + 1) % this.queue.length;
    this.queue[this.rear] = item;
    this.count += 1;
    return "success";
  }

  dequeue() {
    if (this.count === 0) {
      return "list is empty";
    }
    this.front = (this.front + 1) % this.queue.length;
    this.count -= 1;
    return this.queue[this.front];
  }

  printQueue() {
    console.log(this.queue);
  }
}

const circularQueue = new CircularQueue(4);
console.log(circularQueue.dequeue());
console.log(circularQueue.enqueue(1));
console.log(circularQueue.enqueue(2));
console.log(circularQueue.enqueue(3));
console.log(circularQueue.enqueue(4));
circularQueue.printQueue();
console.log(circularQueue.dequeue());
console.log(circularQueue.dequeue());
console.log(circularQueue.enqueue(5));
console.log(circularQueue.enqueue(6));
circularQueue.printQueue();
