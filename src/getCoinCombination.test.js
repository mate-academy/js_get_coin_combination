'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return an array of 4 elements', () => {
    const result = getCoinCombination(1);

    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(4);
  });

  it('should return a correct coins combination', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    expect(getCoinCombination(3)).toEqual([3, 0, 0, 0]);
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
    expect(getCoinCombination(56)).toEqual([1, 1, 0, 2]);
    expect(getCoinCombination(67)).toEqual([2, 1, 1, 2]);
  });
});
