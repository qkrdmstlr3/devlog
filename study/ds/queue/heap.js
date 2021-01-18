/**
 * Heap
 * 완전 이진트리의 일종으로 우선순위 큐를 위하여 만들어진 자료구조
 * 우선순위 큐는 여러가지 방법으로 만들 수 있으나 heap이용하는 것이 가장 효율적이다
 * bst와 달리 중복된 값을 허용
 * https://gmlwjd9405.github.io/2018/05/10/data-structure-heap.html
 */
class MinHeap {
  constructor() {
    this.heap = [undefined];
  }

  insert(item) {
    this.heap.push(item);

    let i = this.heap.length - 1;
    while (i > 1) {
      let parent = i % 2 === 0 ? parseInt(i / 2) : parseInt((i - 1) / 2);
      if (this.heap[i] >= this.heap[parent]) break;

      const temp = this.heap[i];
      this.heap[i] = this.heap[parent];
      this.heap[parent] = temp;
      i = parent;
    }
  }

  remove() {
    if (this.heap.length === 2) {
      return this.heap.pop();
    } else if (this.heap.length === 1) {
      console.log("heap이 비었습니다");
      return;
    }
    const result = this.heap[1];
    this.heap[1] = this.heap.pop();

    let i = 1;
    while (true) {
      const left = i * 2;
      const right = i * 2 + 1;

      if (this.heap[left] < this.heap[i] || this.heap[right] < this.heap[i]) {
        if (this.heap[left] < this.heap[right]) {
          const temp = this.heap[left];
          this.heap[left] = this.heap[i];
          this.heap[i] = temp;
          i = left;
        } else {
          const temp = this.heap[right];
          this.heap[right] = this.heap[i];
          this.heap[i] = temp;
          i = right;
        }
        continue;
      }
      break;
    }

    return result;
  }
}

const heap = new MinHeap();
heap.insert(1);
heap.insert(5);
heap.insert(6);
heap.insert(7);
heap.insert(8);
heap.insert(2);
heap.insert(3);
heap.insert(9);
heap.insert(4);
console.log(heap.heap);
console.log(heap.remove()); // 1
console.log(heap.remove()); // 2
console.log(heap.remove()); // 3
console.log(heap.remove()); // 4
console.log(heap.remove()); // 5
console.log(heap.remove()); // 6
console.log(heap.remove()); // 7
console.log(heap.remove());
console.log(heap.remove());
let a = 0;
{
  console.log(a);
  let a = 1;
}
