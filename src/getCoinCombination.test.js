'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  test('should return [1, 0, 0, 0] for 1 cent (1 penny)', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test('should return [1, 1, 0, 0] for 6 cents (1 penny + 1 nickel)', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test('should return [2, 1, 1, 0] for 17 cents', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  test('should return [0, 0, 0, 2] for 50 cents (2 quarters)', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  test('should return [0, 0, 0, 0] for 0 cents (no coins)', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  test('should return [4, 0, 0, 0] for 4 cents (4 pennies)', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  test('should return [0, 0, 1, 0] for 10 cents (1 dime)', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  test('should return [0, 0, 0, 1] for 25 cents (1 quarter)', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  test('should return [3, 0, 2, 1] for 58 cents', () => {
    expect(getCoinCombination(58)).toEqual([3, 1, 0, 2]);
  });

  test('should return [4, 0, 2, 3] for 99 cents', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });
});
