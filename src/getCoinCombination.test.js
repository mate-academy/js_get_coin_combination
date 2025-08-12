'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return only for Quarters ', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should return only for Penny', () => {
    expect(getCoinCombination(2)).toEqual([2, 0, 0, 0]);
  });

  it('should return for Penny and Nickel', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return for Penny, Nickel and Dime', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('should have combination of all', () => {
    expect(getCoinCombination(42)).toEqual([2, 1, 1, 1]);
  });

  it('should return 0 for all when cent is 0', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });
});
