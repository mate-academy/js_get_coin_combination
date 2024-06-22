'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('should return the correct coin combination for the given amount in cents', () => {
    expect(getCoinCombination(37)).toEqual([2, 0, 1, 1]);
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  it('should handle edge cases', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return an array with four elements', () => {
    const result = getCoinCombination(25);

    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(4);
  });
});
