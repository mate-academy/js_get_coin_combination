'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');
  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  }); 

  it('should return 0 for 0 coin', () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it('should return NaN for string input', () => {
    expect(getCoinCombination('string'))
      .toEqual([NaN, NaN, NaN, NaN]);
  });

  it('should return NaN for null', () => {
    expect(getCoinCombination(null))
      .toEqual([0, 0, 0, 0]);
  });

  it('should return NaN for string input', () => {
    expect(getCoinCombination(undefined))
      .toEqual([NaN, NaN, NaN, NaN]);
  });

  it('should return 1 for 1 coin', () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it('should return n of pennies if cents < 5', () => {
    expect(getCoinCombination(2))
      .toEqual([2, 0, 0, 0]);
  });

  it('should return n of pennies if cents < 5', () => {
    expect(getCoinCombination(4))
      .toEqual([4, 0, 0, 0]);
  });

  it('should return 5 for 5 cents', () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it('should return n of pennies and n of nickels if 5 < cents < 10', () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it('should return n of pennies and n of nickels if 5 < cents < 10', () => {
    expect(getCoinCombination(9))
      .toEqual([4, 1, 0, 0]);
  });

  it('should return 1 dime if cents = 10', () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it('should return res = cents/values[i] if res = 0', () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it('should return n of pennies and 1 nickel if 10 < cents < 15', () => {
    expect(getCoinCombination(11))
      .toEqual([1, 0, 1, 0]);
  });

  it('should return 1 dime and 1 nickel if cents = 15', () => {
    expect(getCoinCombination(15))
      .toEqual([0, 1, 1, 0]);
  });

  it('should return n of pennies, n of nickels and n of dimes'
  + 'if 15 < cents < 25', () => {
    expect(getCoinCombination(16))
      .toEqual([1, 1, 1, 0]);
  });

  it('should return res = cents/values[i] if res = 0', () => {
    expect(getCoinCombination(20))
      .toEqual([0, 0, 2, 0]);
  });

  it('should return n of pennies, n of dimes,'
  + 'n of nickels if 15 < cents < 25', () => {
    expect(getCoinCombination(24))
      .toEqual([4, 0, 2, 0]);
  });

  it('should return 1 quarter if cents = 25', () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  it('should return n of pennies, n of nickels,'
  + 'n of dimes and n of quarters if cents > 25', () => {
    expect(getCoinCombination(26))
      .toEqual([1, 0, 0, 1]);
  });

  it('should return res = cents/values[i] if res = 0', () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });
});
