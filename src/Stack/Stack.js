import { LinkedList } from '../LinkedList/LinkedList';

export class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  get isEmpty() {
    return this.list.isEmpty;
  }

  /**
   * Iterator function.
   *
   * @returns
   * @memberof Stack
   */
  [Symbol.iterator]() {
    return this.list[Symbol.iterator]();
  }

  push(value) {
    this.list.addHead(value);
    return this;
  }

  pop() {
    if (this.isEmpty) {
      throw new Error('STACK_UNDERFLOW');
    }
    return this.list.removeHead();
  }
}
