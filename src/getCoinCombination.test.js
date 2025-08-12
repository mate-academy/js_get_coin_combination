'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test(`should return 1 penny if you give 1 cent`, () => {
    const result = getCoinCombination(1);
    expect(result).toEqual([1, 0, 0, 0]);
  });

  test(`should return 1 penny + 1 nickel if you give 6 cents`, () => {
    const result = getCoinCombination(6);
    expect(result).toEqual([1, 1, 0, 0]);
  });

  test(`should return 2 pennies + 1 nickel + 1 dime if you give 17 cents`, () => {
    const result = getCoinCombination(17);
    expect(result).toEqual([2, 1, 1, 0]);
  });

  test(`should return 2 quarters if you give 50 cents`, () => {
    const result = getCoinCombination(50);
    expect(result).toEqual([0, 0, 0, 2]);
  });
});
