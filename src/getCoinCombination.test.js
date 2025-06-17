'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('should be a declared function', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return only pennies for 2 cents', () => {
    expect(getCoinCombination(2)).toEqual([2, 0, 0, 0]);
  });

  it('should return one nickel for 5 cents', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should return one nickel and one penny for 6 cents', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return one dime for 10 cents', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('should return one dime and one penny for 11 cents', () => {
    expect(getCoinCombination(11)).toEqual([1, 0, 1, 0]);
  });

  it('should return one dime, one nickel, and one penny for 16 cents', () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  it('should return one quarter for 25 cents', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should return one quarter and one penny for 26 cents', () => {
    expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
  });

  it('should return one of each coin for 41 cents', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it('should return all zeros for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });
});
