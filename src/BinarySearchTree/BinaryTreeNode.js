export class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  /**
   * Inserts node in level order.
   *
   * @param {*} x
   * @returns
   * @memberof BinaryTreeNode
   */
  add(x) {
    const queue = [this];
    const newNode = new BinaryTreeNode(x);

    while (true) {
      const node = queue.shift();
      if (node.left === null) {
        node.left = newNode;
        return this;
      }

      if (node.right === null) {
        node.right = newNode;
        return this;
      }
      queue.push(node.left);
      queue.push(node.right);
    }
    return this;
  }
}
