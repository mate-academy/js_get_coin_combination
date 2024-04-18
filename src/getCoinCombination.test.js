'use strict';
const { getCoinCombination } = require('./getCoinCombination');

describe('getCoinCombination', () => {
  it(`should be declared as a function`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should return an array of length 4`, () => {
    const result = getCoinCombination(0);

    expect(result).toBeInstanceOf(Array);
    expect(result).toHaveLength(4);
  });

  it(`should return an array with non-negative integer values`, () => {
    const result = getCoinCombination(25);

    result.forEach(coin => {
      expect(coin).toBeGreaterThanOrEqual(0);
      expect(Number.isInteger(coin)).toBe(true);
    });
  });

  it(`should return correct coin combination for given cents`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });
});