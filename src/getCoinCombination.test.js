'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return array`, () => {
    expect(getCoinCombination())
      .toBeInstanceOf(Array);
  });

  it(`without params`, () => {
    expect(getCoinCombination())
      .toStrictEqual([NaN, NaN, NaN, NaN]);
  });

  it(`should return 1 penny`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`should return 1 penny + 1 nickel`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`should return 2 pennies + 1 nickel + 1 dime`, () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  it(`should return 2 quarters`, () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });

  it(`should return 2 quarters`, () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });
});
