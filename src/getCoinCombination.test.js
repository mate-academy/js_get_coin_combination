'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  test('should return correct combination for 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test('should return correct combination for 6 cents', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test('should return correct combination for 17 cents', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  test('should return correct combination for 50 cents', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  test('should return correct combination for 99 cents', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  test('should return all zeros for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  // eslint-disable-next-line max-len
  test('should return correct combination for larger values like 123 cents', () => {
    expect(getCoinCombination(123)).toEqual([3, 0, 2, 4]);
  });
});
