'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should return the smallest combination`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`should work with negative args`, () => {
    expect(getCoinCombination(-13)).toEqual([2, 0, 1, -1]);
  });

  it(`should work with folat args`, () => {
    expect(getCoinCombination(5.2)).toEqual([0, 1, 0, 0]);
  });
});
