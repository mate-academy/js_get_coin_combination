'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  test('should return all zeros for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  test('should return correct amount of pennies (1 cent)', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  test('should return correct amount of nickels (5 cents)', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  test('should return correct amount of dimes (10 cents)', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
    expect(getCoinCombination(20)).toEqual([0, 0, 2, 0]);
  });

  test('should return correct amount of quarters (25 cents)', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
    expect(getCoinCombination(75)).toEqual([0, 0, 0, 3]);
  });

  test('should return combination for 6 cents (1 penny + 1 nickel)', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test(
    'should return combination for 17 cents'
      + ' (2 pennies + 1 nickel + 1 dime)',
    () => {
      expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
    },
  );

  test('should handle large amounts correctly', () => {
    // 92 = 3 quarters (75) + 1 dime (10) + 1 nickel (5) + 2 pennies (2)
    expect(getCoinCombination(92)).toEqual([2, 1, 1, 3]);
  });
});
