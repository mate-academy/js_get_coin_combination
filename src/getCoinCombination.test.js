'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return all zeros for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should handle various coin combinations', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should handle large values', () => {
    expect(getCoinCombination(1000)).toEqual([0, 0, 0, 40]);
  });

  it('should return the correct sum of coins', () => {
    const result = getCoinCombination(99);

    expect(result[0] * 1 + result[1] * 5 + result[2] * 10 + result[3] * 25)
      .toBe(99);
  });
});
