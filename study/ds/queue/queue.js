// Logic
class Queue {
  constructor() {
    this.queue = [];
  }

  put(item) {
    this.queue.push(item);
  }

  get() {
    return this.queue.shift();
  }

  size() {
    return this.queue.length;
  }

  contains(item) {
    return this.queue.some((s) => s === item);
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

const queue = new Queue();
queue.put(1);
queue.put(2);
queue.put(3);
console.log(queue.size());
console.log(queue.get());
console.log(queue.size());
console.log(queue.contains(1));
console.log(queue.contains(3));
