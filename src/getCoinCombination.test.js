'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should be return [0, 0, 0, 0] if  cents = 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should be return [2, 0, 0, 0] if  cents = 2`, () => {
    expect(getCoinCombination(2)).toEqual([2, 0, 0, 0]);
  });
});