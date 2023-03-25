import { describe, it, expect } from 'vitest';
import { add } from './sample';

describe('sample', () => {
  it('add(1, 2) -> 3', () => {
    expect(add(1, 2)).toBe(3);
  });
});
