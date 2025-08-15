'use strict';

describe('getCoinCombination', () => {
  const {
    getCoinCombination
  } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return expected values for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return expected values for non-negative integer cents', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should return expected values for non-negative integer cents', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });
});
