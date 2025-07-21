'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return correct value for 8`, () => {
    expect(getCoinCombination(8))
      .toEqual([3, 1, 0, 0]);
  });

  it(`should return 0 for 0`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return for big correct value`, () => {
    expect(getCoinCombination(121))
      .toEqual([1, 0, 2, 4]);
  });

  it('should return one 25 coin for 25', () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });
});
