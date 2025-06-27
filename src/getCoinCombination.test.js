'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return [0, 0, 0, 0] for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return [1, 0, 0, 0] for 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return [0, 1, 0, 0] for 5 cents', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should return [0, 0, 1, 0] for 10 cents', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('should return [0, 0, 0, 1] for 25 cents', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should return [1, 1, 1, 1] for 41 cents (25 + 10 + 5 + 1)', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it('should return [2, 0, 0, 3] for 77 cents (3×25 + 2×1)', () => {
    expect(getCoinCombination(77)).toEqual([2, 0, 0, 3]);
    // 3×25 = 75, 2×1 = 2 → 75 + 2 = 77 (total coins: 5)
  });

  it('should return [4, 0, 0, 4] for 104 cents (4×25 + 4×1)', () => {
    expect(getCoinCombination(104)).toEqual([4, 0, 0, 4]);
  });

  it('should return [0, 0, 0, 100] for 2500 cents', () => {
    expect(getCoinCombination(2500)).toEqual([0, 0, 0, 100]);
  });

  it('should return [4, 0, 2, 3] for 99 cents (3×25 + 2×10 + 4×1)', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
    // 3×25 = 75, 2×10 = 20, 4×1 = 4 → 75 + 20 + 4 = 99 (total coins: 9)
  });

  it('should not return undefined or null', () => {
    const result = getCoinCombination(50);

    expect(result).not.toBeNull();
    expect(result).not.toBeUndefined();
  });

  it('should return an array of length 4', () => {
    expect(getCoinCombination(87).length).toBe(4);
  });
});
