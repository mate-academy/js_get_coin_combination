'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array with 4 elements`, () => {
    const result = getCoinCombination();

    expect(result.length).toBe(4);
  });

  it(`should return 0 coin when '0' is entered`, () => {
    expect(getCoinCombination(0))
      .toStrictEqual([0, 0, 0, 0]);
  });

  it(`should return 1 penny when '1' is entered`, () => {
    expect(getCoinCombination(1))
      .toStrictEqual([1, 0, 0, 0]);
  });

  it(`should return 1 penny and 1 nickel when '6' is entered`, () => {
    expect(getCoinCombination(6))
      .toStrictEqual([1, 1, 0, 0]);
  });

  it(`should return 2 pennies, 1 nickel and 1 dime
    when '17' is entered`, () => {
    expect(getCoinCombination(17))
      .toStrictEqual([2, 1, 1, 0]);
  });

  it(`should 2 quarters when '50 is entered`, () => {
    expect(getCoinCombination(50))
      .toStrictEqual([0, 0, 0, 2]);
  });

  it(`should return 4 pennies, 2 dimes and 39 quarters
    when '999' is entered`, () => {
    expect(getCoinCombination(999))
      .toStrictEqual([4, 0, 2, 39]);
  });
});
