'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return 1 penny = 1 cent', () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it('should return 1 nickel = 5 cents', () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it('should return 1 dime = 10 cents', () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it('should return 1 querter = 25 cents', () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  it('should return zeros if value = 0 cents', () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it('should return the smallest combination of coins', () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });
});
