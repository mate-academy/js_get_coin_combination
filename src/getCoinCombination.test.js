'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = getCoinCombination(100);

    expect(Array.isArray(result)).toBe(true);
  });

  it(`should return correct coin combination`, () => {
    const cents = 1301;

    const result = getCoinCombination(cents);

    expect(result).toEqual([1, 0, 0, 52]);
  });

  it(`should return correct coin combination for zero cents`, () => {
    const totalCoins = 0;
    const result = getCoinCombination(totalCoins);

    expect(result).toEqual([0, 0, 0, 0]);
  });
});
