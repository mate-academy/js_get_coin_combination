'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return the correct combination for small amounts', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('should return the correct combination for larger amounts', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
  });

  it('should return [0, 0, 0, 0] for zero cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });
});
