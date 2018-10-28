import { Stack } from './Stack';

describe('LinkedList', () => {
  it('should have linked list defined', () => {
    expect(Stack).not.toBe(undefined);
  });

  it('should iterate the list', () => {
    const data = [1, 2, 3, 4, 5, 6];
    const stack = data.reduce((stack, n) => stack.push(n), new Stack());
    const result = [...stack];
    expect(data.reverse().join(',')).toBe(result.join(','));
  });
});
