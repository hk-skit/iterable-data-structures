import { BinaryTree } from './BinaryTree';

describe('BinaryTree', () => {
  it('should have binary tree defined', () => {
    expect(BinaryTree).not.toBe(undefined);
  });

  it('should traverse nodes in level order', () => {
    const binaryTree = [1, 2, 3, 4, 5, 6, 7].reduce(
      (tree, value) => tree.add(value),
      new BinaryTree()
    );

    expect([...binaryTree]).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
