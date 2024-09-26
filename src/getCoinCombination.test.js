'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should return one of each coin`, () => {
    expect(getCoinCombination(25 + 10 + 5 + 1)).toEqual([1, 1, 1, 1]);
  });

  it(`should return 2 quaters`, () => {
    expect(getCoinCombination(2 * 25)).toEqual([0, 0, 0, 2]);
  });

  it(`should return only zeros`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return more than one coin`, () => {
    expect(getCoinCombination(50 + 20 + 0 + 3)).toEqual([3, 0, 2, 2]);
  });
});
