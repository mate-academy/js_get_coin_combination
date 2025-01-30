'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return correct combination for 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([0, 0, 0, 1]);
  });

  it('should return correct combination for 6 cents', () => {
    expect(getCoinCombination(6)).toEqual([0, 0, 1, 1]);
  });

  it('should return correct combination for 17 cents', () => {
    expect(getCoinCombination(17)).toEqual([0, 1, 1, 2]);
  });

  it('should return correct combination for 50 cents', () => {
    expect(getCoinCombination(50)).toEqual([2, 0, 0, 0]);
  });

  it('should handle 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should handle maximum single coin values', () => {
    expect(getCoinCombination(25)).toEqual([1, 0, 0, 0]);
    expect(getCoinCombination(10)).toEqual([0, 1, 0, 0]);
    expect(getCoinCombination(5)).toEqual([0, 0, 1, 0]);
  });

  it('should handle complex combinations', () => {
    expect(getCoinCombination(99)).toEqual([3, 2, 0, 4]);
    expect(getCoinCombination(67)).toEqual([2, 1, 1, 2]);
    expect(getCoinCombination(42)).toEqual([1, 1, 1, 2]);
  });

  it('should handle larger amounts', () => {
    expect(getCoinCombination(100)).toEqual([4, 0, 0, 0]);
    expect(getCoinCombination(187)).toEqual([7, 1, 0, 2]);
  });

  it('should handle negative numbers by returning all zeros', () => {
    expect(getCoinCombination(-5)).toEqual([0, 0, 0, 0]);
  });

  it('should handle floating point numbers by rounding down', () => {
    expect(getCoinCombination(5.7)).toEqual([0, 0, 1, 0]);
    expect(getCoinCombination(25.9)).toEqual([1, 0, 0, 0]);
  });
});
