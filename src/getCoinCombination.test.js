'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('should be declared', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return no coins for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return pennies only', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it('should return a nickel without pennies', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should return pennies and a nickel', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return a dime without smaller coins', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('should return a mixed combination', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('should use a quarter instead of smaller coins', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should return two quarters for 50 cents', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should return the smallest combination for 99 cents', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  it('should work with amounts greater than 100 cents', () => {
    expect(getCoinCombination(141)).toEqual([1, 1, 1, 5]);
  });
});
