'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return the correct coin combination for given cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  it('should prioritize larger coins first', () => {
    expect(getCoinCombination(30)).toEqual([0, 1, 1, 1]);
    expect(getCoinCombination(75)).toEqual([0, 0, 0, 3]);
    expect(getCoinCombination(87)).toEqual([2, 0, 1, 3]);
  });
});
