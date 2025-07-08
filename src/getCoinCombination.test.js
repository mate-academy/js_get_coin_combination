/* eslint-disable max-len */
'use strict';

const { getCoinCombination } = require('./getCoinCombination');

describe('getCoinCombination', () => {
  test('should return all zeros when given 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  test('should return [1, 0, 0, 0] for 1 cent (1 penny)', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test('should return [1, 1, 0, 0] for 6 cents (1 penny + 1 nickel)', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test('should return [2, 1, 1, 0] for 17 cents (2 pennies, 1 nickel, 1 dime)', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  test('should return [0, 0, 0, 2] for 50 cents (2 quarters)', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  test('should return correct combination for 99 cents', () => {
    // 4 pennies + 0 nickels + 2 dimes + 3 quarters = 99
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  test('should return correct combination for 41 cents', () => {
    // 1 penny, 1 nickel, 1 dime, 1 quarter = 1 + 5 + 10 + 25 = 41
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });
});
