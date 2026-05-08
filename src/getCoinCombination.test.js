'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should return 1 penny when cent is 1`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return 1 penny and 1 nickel when cent are 6`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should return 2 pennies, 1 nickel and 1 dime when cent are 17`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`should return 2 quarters when cent are 50`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
