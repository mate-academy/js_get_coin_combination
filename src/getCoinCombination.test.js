'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('should return 1 penny if cents = 1', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test('should return 3 penny if cents = 3', () => {
    expect(getCoinCombination(3)).toEqual([3, 0, 0, 0]);
  });

  test('should return 1 nickel if cents = 5', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  test('should return 1 penny + 1 nickel if cents = 6', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test('should return 1 nickel + 1 dime if cents = 15', () => {
    expect(getCoinCombination(15)).toEqual([0, 1, 1, 0]);
  });

  test('should return 1 penny + 1 nickel + 2 quarters if cents = 56', () => {
    expect(getCoinCombination(56)).toEqual([1, 1, 0, 2]);
  });

  test('should return 8 quarters if cents = 200', () => {
    expect(getCoinCombination(200)).toEqual([0, 0, 0, 8]);
  });
});
