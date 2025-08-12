'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return two pennies`, () => {
    expect(getCoinCombination(2))
      .toEqual([2, 0, 0, 0]);
  });

  it(`should return three pennies and one nickel`, () => {
    expect(getCoinCombination(8))
      .toEqual([3, 1, 0, 0]);
  });

  it(`should return three pennies, one nickel and one dime`, () => {
    expect(getCoinCombination(18))
      .toEqual([3, 1, 1, 0]);
  });

  it(`should return one penny, one nickel, one dime and one quarter`, () => {
    expect(getCoinCombination(41))
      .toEqual([1, 1, 1, 1]);
  });

  it(`should return three quarters`, () => {
    expect(getCoinCombination(75))
      .toEqual([0, 0, 0, 3]);
  });

  it(`should return one penny, one nickel and three quarters`, () => {
    expect(getCoinCombination(81))
      .toEqual([1, 1, 0, 3]);
  });
});
