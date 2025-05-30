'use strict';

const { getCoinCombination } = require('./getCoinCombination');

describe('getCoinCombination', () => {
  test('returns correct coin combination for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  test('returns correct coin combination for 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test('returns correct coin combination for 6 cents', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]); // 1 + 5
  });

  test('returns correct coin combination for 41 cents', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]); // 1 + 5 + 10 + 25
  });

  test('returns correct coin combination for 99 cents', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]); // 4x1 + 2x10 + 3x25
  });

  test('returns correct coin combination for 100 cents', () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]); // 4x25
  });
});
