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

  it('should return 1 for 1 coin', () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it('should return 2 of pennies if cents = 2', () => {
    expect(getCoinCombination(2))
      .toEqual([2, 0, 0, 0]);
  });

  it('should return 4 of pennies if cents = 4', () => {
    expect(getCoinCombination(4))
      .toEqual([4, 0, 0, 0]);
  });

  it('should return 1 nickel for 5 cents', () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it('should return 1 of pennies and 1 of nickels if cents = 6', () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it('should return 4 of pennies and 1 of nickels if cents = 9', () => {
    expect(getCoinCombination(9))
      .toEqual([4, 1, 0, 0]);
  });

  it('should return 1 dime if cents = 10', () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it('should return 1 res = 10', () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it('should return 1 of pennies and 1 nickel if  cents = 11', () => {
    expect(getCoinCombination(11))
      .toEqual([1, 0, 1, 0]);
  });

  it('should return 1 dime and 1 nickel if cents = 15', () => {
    expect(getCoinCombination(15))
      .toEqual([0, 1, 1, 0]);
  });

  it('should return 1 of pennies, 1 of nickels and 1 of dimes'
  + 'if cents = 16', () => {
    expect(getCoinCombination(16))
      .toEqual([1, 1, 1, 0]);
  });

  it('should return 2 dimes if cents/10 === 0', () => {
    expect(getCoinCombination(20))
      .toEqual([0, 0, 2, 0]);
  });

  it('should return 4 of pennies, 2 of dimes,'
  + ' if cents = 24', () => {
    expect(getCoinCombination(24))
      .toEqual([4, 0, 2, 0]);
  });

  it('should return 1 quarter if cents = 25', () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  it('should return 1 of pennies'
  + '1 of quarters if cents = 26', () => {
    expect(getCoinCombination(26))
      .toEqual([1, 0, 0, 1]);
  });

  it('should return 2 quarter if cents = 50', () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });
});
