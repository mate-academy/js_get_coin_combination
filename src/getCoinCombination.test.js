'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test(`should return [0, 0, 0, 0] if there is no coins`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  test(`should return [4, 0, 0, 0] if 4 coins are added`, () => {
    expect(getCoinCombination(4))
      .toEqual([4, 0, 0, 0]);
  });

  test(`should return [3, 1, 0, 0] if 8 coins are added`, () => {
    expect(getCoinCombination(8))
      .toEqual([3, 1, 0, 0]);
  });

  test(`should return [4, 1, 1, 0] if 19 coins are added`, () => {
    expect(getCoinCombination(19))
      .toEqual([4, 1, 1, 0]);
  });

  test(`should return [3, 0, 0, 2] if 53 coins are added`, () => {
    expect(getCoinCombination(53))
      .toEqual([3, 0, 0, 2]);
  });
});
