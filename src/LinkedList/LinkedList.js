/**
 * Linked List Node.
 *
 * @class Node
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Linked List data structure.
 *
 * @export
 * @class LinkedList
 */
export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * Iterator function.
   *
   * @returns
   * @memberof LinkedList
   */
  // [Symbol.iterator]() {
  //   let current = this.head;
  //   const iterable = {
  //     next: () => {
  //       if (current === null) {
  //         return {
  //           done: true
  //         };
  //       }
  //       const { value, next } = current;
  //       current = next;
  //       return {
  //         value,
  //         done: false
  //       };
  //     }
  //   };
  //   return iterable;
  // }

  // Generator function.
  *[Symbol.iterator]() {
    let current = this.head;
    while (current !== null) {
      const { value } = current;
      current = current.next;
      yield value;
    }
  }

  get isEmpty() {
    return this.head === null;
  }

  /**
   * Adds a value to linked list.
   *
   * @param {*} value
   * @returns
   * @memberof LinkedList
   */
  add(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = this.tail = node;
      return this;
    }
    this.tail.next = node;
    this.tail = node;
    return this;
  }

  /**
   * Adds value to the head of the list.
   *
   * @param {*} value
   * @memberof LinkedList
   */
  addHead(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  removeHead() {
    if (this.isEmpty) {
      return null;
    }
    const head = this.head;
    this.head = this.head.next;
    return head.value;
  }

  /**
   * Removes the tail element.
   *
   * @memberof LinkedList
   */
  removeTail() {
    if (this.isEmpty) {
      return null;
    }

    const { value } = this.tail;
    if (this.head === this.tail) {
      // List with single node.
      this.tail = this.head = null;
      return value;
    }

    let prev = null;
    let current = this.head;
    while (current.next !== null) {
      prev = current;
      current = current.next;
    }

    // Adjust tail pointer.
    prev.next = null;
    this.tail = prev;

    return value;
  }

  /**
   * Removes a value from linked list.
   *
   * @param {*} x
   * @memberof LinkedList
   */
  remove(x) {
    let prev = null;
    let current = this.head;
    while (current !== null) {
      const { value, next } = current;
      if (value !== x) {
        prev = current;
        current = next;
        continue;
      }
      // If value is at head.
      if (prev === null) {
        this.head = next;
      } else {
        prev.next = next;
      }
      return x;
    }
    return null;
  }
}
