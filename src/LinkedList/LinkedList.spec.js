import { LinkedList } from './LinkedList';

describe('LinkedList', () => {
  it('should have linked list defined', () => {
    expect(LinkedList).not.toBe(undefined);
  });

  it('should iterate the list', () => {
    const data = [1, 2, 3, 4, 5, 6];
    const list = data.reduce((list, n) => list.add(n), new LinkedList());
    const result = [...list];
    expect(data.join(',')).toBe(result.join(','));
  });
});
