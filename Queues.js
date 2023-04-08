// lookup O(n)
// enqueue O(1)
// dequeue O(1)
//peek O(1)
// First In First Out(FIFO)
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return console.log(this.first);
  }
  enqueue(value) {
    const newNode = {
      value: value,
      next: null,
    };
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const holdingPointer = this.first;
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return console.log(null);
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return this;
  }
}
const myQueue = new Queue();
