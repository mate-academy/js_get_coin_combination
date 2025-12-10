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

  it(`should return correct coin combination for 1`, () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  it(`should return correct coin combination for 6`, () => {
    const result = getCoinCombination(6);

    expect(result).toEqual([1, 1, 0, 0]);
  });

  it(`should return correct coin combination for 17`, () => {
    const result = getCoinCombination(17);

    expect(result).toEqual([2, 1, 1, 0]);
  });

  it(`should return correct coin combination for 50`, () => {
    const result = getCoinCombination(50);

    expect(result).toEqual([0, 0, 0, 2]);
  });

  it(`should return correct coin combination for zero cents`, () => {
    const totalCoins = 0;
    const result = getCoinCombination(totalCoins);

    expect(result).toEqual([0, 0, 0, 0]);
  });
});
