'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('should be declared', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return [0, 0, 0, 0] for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return [1, 0, 0, 0] for 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return [0, 1, 0, 0] for 5 cents', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should return [0, 0, 1, 0] for 10 cents', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('should return [0, 0, 0, 1] for 25 cents', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should return [1, 0, 1, 1] for 36 cents (25 + 10 + 1)', () => {
    expect(getCoinCombination(36)).toEqual([1, 0, 1, 1]);
  });

  it('should return [1, 0, 0, 3] for 76 cents (25*3 + 1*3)', () => {
    expect(getCoinCombination(76)).toEqual([1, 0, 0, 3]);
  });

  it('should return [4, 0, 0, 3] for 79 cents (25*3 + 1*4)', () => {
    expect(getCoinCombination(79)).toEqual([4, 0, 0, 3]);
  });

  it('should return [3, 1, 0, 3] for 83 cents (25*3 + 10 + 1*3)', () => {
    expect(getCoinCombination(83)).toEqual([3, 1, 0, 3]);
  });

  it('should handle large values correctly (e.g. 99 cents)', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });
});
