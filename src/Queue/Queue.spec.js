import { Queue } from './Queue';

describe('Queue', () => {
  it('should have Queue defined', () => {
    expect(Queue).not.toBe(undefined);
  });

  it('should iterate the queue', () => {
    const data = [1, 2, 3, 4, 5, 6];
    const queue = data.reduce((queue, n) => queue.enqueue(n), new Queue());
    const result = [...queue];
    expect(data.join(',')).toBe(result.join(','));
  });
});
