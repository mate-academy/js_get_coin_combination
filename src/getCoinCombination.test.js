'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`0 money = 0 cent`, () => {
    expect(getCoinCombination(0))
      .toStrictEqual([0, 0, 0, 0]);
  });

  it(`1 penny = 1 cent`, () => {
    expect(getCoinCombination(1))
      .toStrictEqual([1, 0, 0, 0]);
  });

  it(`1 nickels = 5 cent`, () => {
    expect(getCoinCombination(5))
      .toStrictEqual([0, 1, 0, 0]);
  });

  it(`1 dimes = 10 cent`, () => {
    expect(getCoinCombination(10))
      .toStrictEqual([0, 0, 1, 0]);
  });

  it(`1 quarters = 25 cent`, () => {
    expect(getCoinCombination(25))
      .toStrictEqual([0, 0, 0, 1]);
  });

  it(`1 nickels + 1 penny = 6 cent`, () => {
    expect(getCoinCombination(6))
      .toStrictEqual([1, 1, 0, 0]);
  });

  it(`1 dimes + 1 nickels + 2 penny = 17 cent`, () => {
    expect(getCoinCombination(17))
      .toStrictEqual([2, 1, 1, 0]);
  });

  it(`1 quarters + 1 nickels = 35 cent`, () => {
    expect(getCoinCombination(35))
      .toStrictEqual([0, 0, 1, 1]);
  });
});
