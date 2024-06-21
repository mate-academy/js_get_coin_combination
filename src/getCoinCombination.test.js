'use strict';

const { getCoinCombination } = require('./getCoinCombination');

describe('getCoinCombination', () => {
  it('should return correct coin combinations', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
    expect(getCoinCombination(123)).toEqual([3, 0, 2, 4]);
    expect(getCoinCombination(300)).toEqual([0, 0, 0, 12]);
  });

  it('should handle large amounts', () => {
    expect(getCoinCombination(999)).toEqual([4, 0, 2, 39]);
    expect(getCoinCombination(1000)).toEqual([0, 0, 0, 40]);
    expect(getCoinCombination(12345)).toEqual([0, 0, 2, 493]);
  });

  it('should handle edge cases', () => {
    expect(getCoinCombination(3)).toEqual([3, 0, 0, 0]);
    expect(getCoinCombination(20)).toEqual([0, 0, 2, 0]);
    expect(getCoinCombination(95)).toEqual([0, 0, 2, 3]);
  });
});
