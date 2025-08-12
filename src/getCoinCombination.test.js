'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return array`, () => {
    expect(getCoinCombination([]))
      .toBeInstanceOf(Array);
  });

  it(`should return array with positive integer `, () => {
    expect(getCoinCombination(1))
      .toStrictEqual([1, 0, 0, 0]);
  });

  it(`should return zero if 0 coins  `, () => {
    expect(getCoinCombination(0))
      .toStrictEqual([0, 0, 0, 0]);
  });

  it(`should return quaters if the coins 50 `, () => {
    expect(getCoinCombination(50))
      .toStrictEqual([0, 0, 0, 2]);
  });

  it(`should return penni, nikel, daim if the coins 17 `, () => {
    expect(getCoinCombination(17))
      .toStrictEqual([2, 1, 1, 0]);
  });

  it(`should return penni, nikel if the coins 6 `, () => {
    expect(getCoinCombination(6))
      .toStrictEqual([1, 1, 0, 0]);
  });
});
