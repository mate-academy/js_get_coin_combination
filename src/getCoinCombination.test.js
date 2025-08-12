'use strict';

const { getCoinCombination } = require('./getCoinCombination');

describe('getCoinCombination', () => {
  test('should return all zeros for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  test('should handle values requiring only pennies', () => {
    expect(getCoinCombination(3)).toEqual([3, 0, 0, 0]);
  });

  test('should handle values requiring only nickels', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  test('should handle values requiring only dimes', () => {
    expect(getCoinCombination(20)).toEqual([0, 0, 2, 0]);
  });

  test('should handle values requiring only quarters', () => {
    expect(getCoinCombination(75)).toEqual([0, 0, 0, 3]);
  });

  test('should handle mixed coins with no remainder', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  test('should handle mixed coins with a remainder', () => {
    expect(getCoinCombination(87)).toEqual([2, 0, 1, 3]);
  });

  test('should handle large values', () => {
    expect(getCoinCombination(123)).toEqual([3, 0, 2, 4]);
  });

  test('should handle edge case of 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test('should handle edge case of 99 cents', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });
});
