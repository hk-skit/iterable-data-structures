import { BinaryTreeNode } from './BinaryTreeNode';
export class BinaryTree {
  constructor() {
    this.root = null;
  }

  get isEmpty() {
    return this.root === null;
  }

  add(x) {
    if (this.isEmpty) {
      this.root = new BinaryTreeNode(x);
    } else {
      this.root.add(x);
    }
    return this;
  }

  /**
   * Iterator. Traverses in level order.
   *
   * @memberof BinaryTree
   */
  *[Symbol.iterator]() {
    const queue = this.isEmpty ? [] : [this.root];
    while (queue.length) {
      const { value, left, right } = queue.shift();
      if (left !== null) {
        queue.push(left);
      }

      if (right !== null) {
        queue.push(right);
      }
      yield value;
    }
  }
}
