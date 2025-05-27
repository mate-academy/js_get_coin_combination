'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return array with 0s for 0 cents`, () => {
    expect(getCoinCombination(0))
      .toStrictEqual([0, 0, 0, 0]);
  });

  it(`should return 4 penny for 4 cents`, () => {
    expect(getCoinCombination(4))
      .toStrictEqual([4, 0, 0, 0]);
  });

  it(`should return 1 nickel for 5 cents`, () => {
    expect(getCoinCombination(5))
      .toStrictEqual([0, 1, 0, 0]);
  });

  it(`should return 1 nickel and 4 penny for 5 < cents > 10`, () => {
    expect(getCoinCombination(9))
      .toStrictEqual([4, 1, 0, 0]);
  });

  it(`should return 1 dime for 10 cents`, () => {
    expect(getCoinCombination(10))
      .toStrictEqual([0, 0, 1, 0]);
  });

  it(`should return 2 dime, 4 pennies for 24 cents`, () => {
    expect(getCoinCombination(24))
      .toStrictEqual([4, 0, 2, 0]);
  });

  it(`should return 1 quarter for 25 cents`, () => {
    expect(getCoinCombination(25))
      .toStrictEqual([0, 0, 0, 1]);
  });

  it(`should return 1 quarter 1 dime, 1 penny for 36 cents`, () => {
    expect(getCoinCombination(36))
      .toStrictEqual([1, 0, 1, 1]);
  });
});
