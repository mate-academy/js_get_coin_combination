'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`if 1 coin should be 1 penny`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`if 6 coin should be 1 penny + 1 nickel`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`if 17 coin should be 2 pennies + 1 nickel + 1 dime`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`if 50 coin should be 2 quarters`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
