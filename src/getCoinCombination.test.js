'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test(`should return 1 penny for 1 cent`, () => {
    const actual = getCoinCombination(1);
    const expected = [1, 0, 0, 0];

    expect(actual)
      .toEqual(expected);
  });

  test(`should return 1 penny and 1 nickel for 6 cent`, () => {
    const actual = getCoinCombination(6);
    const expected = [1, 1, 0, 0];

    expect(actual)
      .toEqual(expected);
  });

  test(`should return 2 pennies + 1 nickel + 1 dime for 17 cents`, () => {
    const actual = getCoinCombination(17);
    const expected = [2, 1, 1, 0];

    expect(actual)
      .toEqual(expected);
  });

  test(`should return 2 quarters for 50 cents`, () => {
    const actual = getCoinCombination(50);
    const expected = [0, 0, 0, 2];

    expect(actual)
      .toEqual(expected);
  });
});
