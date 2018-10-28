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
  }

  /**
   * Iterator function.
   *
   * @returns
   * @memberof LinkedList
   */
  [Symbol.iterator]() {
    let current = this.head;
    const iterable = {
      next: () => {
        if (current === null) {
          return {
            done: true
          };
        }
        const { value, next } = current;
        current = next;
        return {
          value,
          done: false
        };
      }
    };
    return iterable;
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
      this.head = node;
      return this;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
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
