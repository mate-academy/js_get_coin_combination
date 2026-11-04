'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('should be declared', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return no coins for zero cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return pennies for amounts below five cents', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it('should use one coin for each available denomination', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should combine different denominations', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it('should use the smallest possible number of coins', () => {
    expect(getCoinCombination(20)).toEqual([0, 0, 2, 0]);
    expect(getCoinCombination(30)).toEqual([0, 1, 0, 1]);
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should handle amounts just below denomination boundaries', () => {
    expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
    expect(getCoinCombination(24)).toEqual([4, 0, 2, 0]);
    expect(getCoinCombination(49)).toEqual([4, 0, 2, 1]);
  });

  it('should handle amounts greater than one dollar', () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
    expect(getCoinCombination(143)).toEqual([3, 1, 1, 5]);
  });
});
