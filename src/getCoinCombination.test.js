'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  const coinCombinations = {
    1: [1, 0, 0, 0], // 1 penny
    6: [1, 1, 0, 0], // 1 penny + 1 nickel
    17: [2, 1, 1, 0], // 2 pennies + 1 nickel + 1 dime
    50: [0, 0, 0, 2], // 2 quarters
  };

  for (const key in coinCombinations) {
    it(`should return ${coinCombinations[key]}  if  passed ${key}`, () => {
      expect(getCoinCombination(Number(key))).toEqual(coinCombinations[key]);
    });
  }
});
