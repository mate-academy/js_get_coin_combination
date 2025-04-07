'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return [0, 0, 0, 0] for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return [1, 0, 0, 0] for 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return [1, 1, 0, 0] for 6 cents', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return [2, 1, 1, 0] for 17 cents', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('should return [0, 0, 0, 2] for 50 cents', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should return [0, 1, 0, 1] for 30 cents (1 quarter + 1 nickel)', () => {
    expect(getCoinCombination(30)).toEqual([0, 1, 0, 1]);
  });

  it('should return [4, 0, 0, 1] for 29 cents (1 quarter + 4 pennies)', () => {
    expect(getCoinCombination(29)).toEqual([4, 0, 0, 1]);
  });

  it(
    'should return [3, 0, 1, 2] for 63 cents '
    + '(2 quarter + 1 dimes + 3 pennies)',
    () => {
      expect(getCoinCombination(63)).toEqual([3, 0, 1, 2]);
    }
  );

  it('should handle large values, e.g., 99 cents', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });
});
