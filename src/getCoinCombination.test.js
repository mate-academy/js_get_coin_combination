'use strict';

const { getCoinCombination } = require('./getCoinCombination');

describe('getCoinCombination', () => {
  test('should be declared', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  test('should return an empty combination for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  test('should return pennies for small amounts', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    expect(getCoinCombination(3)).toEqual([3, 0, 0, 0]);
  });

  test('should use nickels when possible', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test('should use dimes when possible', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  test('should use quarters when possible', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  test('should return the minimum number of coins', () => {
    expect(getCoinCombination(30)).toEqual([0, 1, 0, 1]);
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });
});
