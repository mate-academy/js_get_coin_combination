'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  test(`'getCoinCombination' function`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('1 penny', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test('1 penny + 1 nickel', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test('2 pennies + 1 nickel + 1 dime', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  test('2 quarters', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  test('0 money', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  test('only nickels', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  test('only dime', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  test('all types of money', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  test('big number', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });
});
