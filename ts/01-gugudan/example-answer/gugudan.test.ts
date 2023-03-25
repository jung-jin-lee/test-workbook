import { describe, it, expect } from 'vitest';
import { 구구단 } from './gugudan';

describe('gugudan', () => {
  it('2단 -> [2, 4, 6, 8, 10, 12, 14, 16, 18]', () => {
    expect(구구단(2)).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
  });

  it('9단 -> [9, 18, 27, 36, 45, 54, 63, 72, 81]', () => {
    expect(구구단(9)).toEqual([9, 18, 27, 36, 45, 54, 63, 72, 81]);
  });
});
