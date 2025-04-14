'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('should return correct combination of coins for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  test('should return 1 nickel when 5 cents is entered' , () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  test('should return 1 nickel and 2 pennies when 7 cents is entered', () => {
    expect(getCoinCombination(7)).toEqual([2, 1, 0, 0]);
  });

  test('should return 1 dime when 10 cents is entered', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  test('should return 2 pennies, 1 nickel and 1 dime when 17cents is entered', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  test('should return 1 quarter when 25 cents is entered', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  test('should return 2pennies, 2 dimes, 3 quarters when 97 cents is entered', () => {
    expect(getCoinCombination(97)).toEqual([2, 0, 2, 3]);
  });
});
