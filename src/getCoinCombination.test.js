'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return the correct combination of coins', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should return [0, 0, 0, 0] when cents is 0', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should handle edge cases', () => {
    expect(getCoinCombination(999)).toEqual([4, 0, 2, 39]);
    expect(getCoinCombination(-2)).toEqual([3, 0, 2, -1]);
  });

  it('should handle non-integer cents', () => {
    expect(getCoinCombination(3.75)).toEqual([3, 0, 0, 0]);
    expect(getCoinCombination(7.2)).toEqual([2, 1, 0, 0]);
  });
});
