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

  it('should return [4, 0, 2, 1] for 49 cents (1x25 + 2x10 + 4x1)', () => {
    expect(getCoinCombination(49)).toEqual([4, 0, 2, 1]);
  });

  it('should return [3, 1, 0, 3] for 83 cents (3x25 + 1x5 + 3x1)', () => {
    expect(getCoinCombination(83)).toEqual([3, 1, 0, 3]);
  });

  it('should handle large input correctly (e.g., 100)', () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
  });
});
