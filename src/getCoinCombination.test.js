'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  test('should return [1, 0, 0, 0] when cents is 1', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test('should return [1, 1, 0, 0] when cents is 6', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test('should return [2, 1, 1, 0] when cents is 17', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  test('should return [0, 0, 0, 2] when cents is 50', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  test('should return [4, 0, 0, 0] when cents is 4', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  test('should return [0, 1, 0, 0] when cents is 5', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  test('should return [0, 0, 1, 0] when cents is 10', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  test('should return [4, 1, 0, 0] when cents is 9', () => {
    expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
  });

  test('should return [4, 0, 2, 0] when cents is 24', () => {
    expect(getCoinCombination(24)).toEqual([4, 0, 2, 0]);
  });

  test('should return [0, 0, 0, 0] when cents is 0', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });
});
