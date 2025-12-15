'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('should return array', () => {
    expect(getCoinCombination(50)).toBeInstanceOf(Array);
  });

  test('should return [0, 0, 0, 0] if cents === 0', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  test('should return array with length === 4', () => {
    expect(getCoinCombination(50).length).toBe(4);
  });

  test('should return [0, 1, 1, 3] if cents === 90', () => {
    expect(getCoinCombination(90)).toEqual([0, 1, 1, 3]);
  });

  test('should return [1, 0, 0, 0] if cents === 1', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test('should return [1, 1, 0, 0] if cents === 6', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test('should return [2, 1, 1, 0] if cents === 17', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  test('should return [0, 0, 0, 2] if cents === 50', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
