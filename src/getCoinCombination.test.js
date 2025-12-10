'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = getCoinCombination(100, [1, 5, 10, 25, 50]);

    expect(Array.isArray(result)).toBe(true);
  });

  it(`should return correct coin combination`, () => {
    const totalCoins = 63;
    const result = getCoinCombination(totalCoins);

    expect(result).toEqual([3, 0, 1, 2]);
  });

  it(`should return correct coin combination for zero cents`, () => {
    const totalCoins = 0;
    const result = getCoinCombination(totalCoins);

    expect(result).toEqual([0, 0, 0, 0]);
  });
});
