'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return array from 4 elements`, () => {
    const result = getCoinCombination(0);

    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(4);
  });

  it(`should return right number of pennies`, () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  it(`should return right number of pennies and nickels`, () => {
    const result = getCoinCombination(6);

    expect(result).toEqual([1, 1, 0, 0]);
  });

  it(`should return right number of pennies, nickels and dimes`, () => {
    const result = getCoinCombination(17);

    expect(result).toEqual([2, 1, 1, 0]);
  });

  it(`should return right number of pennies, nickels, dimes and quarters`,
    () => {
      const result = getCoinCombination(67);

      expect(result).toEqual([2, 1, 1, 2]);
    });
});
