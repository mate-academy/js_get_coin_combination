'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should handle 0', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return pennies', () => {
    expect(getCoinCombination(3)).toEqual([3, 0, 0, 0]);
  });

  it('should return nickels', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should return dimes', () => {
    expect(getCoinCombination(20)).toEqual([0, 0, 2, 0]);
  });

  it('should return quarters', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should count correctly up to 100', () => {
    expect(getCoinCombination(88)).toEqual([3, 0, 1, 3]);
  });

  it('should count correctly up to 1000', () => {
    expect(getCoinCombination(982)).toEqual([2, 1, 0, 39]);
  });

  it('should handle negative', () => {
    expect(getCoinCombination(-4)).toEqual([0, 0, 0, 0]);
  });

  it('should handle decimals', () => {
    expect(getCoinCombination(66.65)).toEqual([1, 1, 1, 2]);
  });
});
