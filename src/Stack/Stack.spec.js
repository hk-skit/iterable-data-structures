import { Stack } from './Stack';

describe('Queue', () => {
  it('should have Stack defined', () => {
    expect(Stack).not.toBe(undefined);
  });

  it('should iterate the stack', () => {
    const data = [1, 2, 3, 4, 5, 6];
    const stack = data.reduce((stack, n) => stack.push(n), new Stack());
    const result = [...stack];
    expect(data.reverse().join(',')).toBe(result.join(','));
  });
});
