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

  test('should return correct combination of coins for 5 cents', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  test('should return correct combination of coins for 7 cents', () => {
    expect(getCoinCombination(7)).toEqual([2, 1, 0, 0]);
  });

  test('should return correct combination of coins for 10 cents', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  test('should return correct combination of coins for 17 cents', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  test('should return correct combination of coins for 25 cents', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  test('should return correct combination of coins for 97 cents', () => {
    expect(getCoinCombination(97)).toEqual([2, 0, 2, 3]);
  });
});
