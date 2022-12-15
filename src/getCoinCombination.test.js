'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test(`should return zeros if cent = 0`, () => {
    expect(getCoinCombination(0))
      .toStrictEqual([0, 0, 0, 0]);
  });

  test(`should return penny`, () => {
    expect(getCoinCombination(1))
      .toStrictEqual([1, 0, 0, 0]);
  });

  test(`should return nickel`, () => {
    expect(getCoinCombination(5))
      .toStrictEqual([0, 1, 0, 0]);
  });

  test(`should return dime`, () => {
    expect(getCoinCombination(10))
      .toStrictEqual([0, 0, 1, 0]);
  });

  test(`should return quarter`, () => {
    expect(getCoinCombination(25))
      .toStrictEqual([0, 0, 0, 1]);
  });

  test(`should return all coins`, () => {
    expect(getCoinCombination(41))
      .toStrictEqual([1, 1, 1, 1]);
  });
});
