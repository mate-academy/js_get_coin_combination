'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('should return [1, 0, 0, 0] for 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test('should return [1, 0, 0, 1] for 26 cents', () => {
    expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
  });

  test('should return [1, 1, 0, 0] for 6 cents', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test('should return [2, 1, 1, 0] for 17 cents', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  test('should return [0, 0, 0, 2] for 50 cents', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  test('should return [0, 1, 2, 1] for 41 cents', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  test('should return [0, 0, 1, 0] for 10 cents', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  test('should return [3, 1, 0, 0] for 8 cents', () => {
    expect(getCoinCombination(8)).toEqual([3, 1, 0, 0]);
  });

  test('should return [1, 1, 1, 0] for 16 cents', () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  test('should return [0, 1, 0, 0] for 5 cents', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  test('should handle large values correctly', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  test('should handle values that are multiples of 25', () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
  });

  test('should return [0, 0, 0, 0] for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });
});
