'use strict';

const { getCoinCombination } = require('./getCoinCombination');

describe('getCoinCombination', () => {
  test('should return [1, 0, 0, 0] for 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
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

  test('should return [4, 0, 0, 0] for 4 cents', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  test('should return [0, 0, 1, 0] for 10 cents', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  test('should return [0, 0, 2, 2] for 60 cents', () => {
    expect(getCoinCombination(60)).toEqual([0, 0, 2, 2]);
  });

  test('should return [0, 0, 0, 4] for 100 cents (1 dollar)', () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
  });

  test('should return [0, 0, 1, 3] for 85 cents', () => {
    expect(getCoinCombination(85)).toEqual([0, 0, 1, 3]);
  });
});
