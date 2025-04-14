'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`getCoinCombination(1) should return [1, 0, 0, 0]`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`getCoinCombination(6) should return [1, 1, 0, 0]`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`getCoinCombination(17) should return [2, 1, 1, 0]`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`getCoinCombination(50) should return [0, 0, 0, 2]`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
