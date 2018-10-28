import { LinkedList } from '../LinkedList/LinkedList';

export class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  get isEmpty() {
    return this.list.isEmpty;
  }

  peek() {
    return this.isEmpty ? null : this.list.head.value;
  }

  enqueue(x) {
    this.list.add(x);
    return this;
  }

  dequeue() {
    return this.list.removeHead();
  }

  // Iterator function for queue.
  [Symbol.iterator]() {
    return this.list[Symbol.iterator]();
  }
}
