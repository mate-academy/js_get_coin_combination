'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test(`should return 0 for 0 cents`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  test(`should return 1 penny for 1 cent`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test(`should return 1 nickel for 5 cents`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  test(`should return 1 dime for 10 cents`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  test(`should return 1 quarter for 25 cents`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  test(`should return 4 quarters for 100 cents`, () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
  });

  test(`should return 1 penny and 1 nickel for 6 cents`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test(`should return 2 pennies, 1 nickel and 1 dime for 17 cents`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  test(`should return 2 quarters for 50 cents`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  test(`should return 2 pennies for 2 cents`, () => {
    expect(getCoinCombination(2)).toEqual([2, 0, 0, 0]);
  });

  test(`should return 1 penny, 1 dime for 11 cents`, () => {
    expect(getCoinCombination(11)).toEqual([1, 0, 1, 0]);
  });

  test(`should return 3 quarters, 2 dimes and 4 pennies for 99 cents`, () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });
});
