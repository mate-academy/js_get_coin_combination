'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test(`1 penny`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  test(`2 penny + 1 nickel`, () => {
    expect(getCoinCombination(8))
      .toEqual([3, 1, 0, 0]);
  });

  test(`2 dime + 4 penny`, () => {
    expect(getCoinCombination(24))
      .toEqual([4, 0, 2, 0]);
  });

  test(`1 quarter + 1 nickel + 2 penny`, () => {
    expect(getCoinCombination(32))
      .toEqual([2, 1, 0, 1]);
  });

  test(`2 quarter + 1 dime + 1 nickel + 2 penny`, () => {
    expect(getCoinCombination(67))
      .toEqual([2, 1, 1, 2]);
  });
});
