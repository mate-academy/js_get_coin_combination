'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  test(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('returns zero values for the input 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  test('should return the correct coin combination for 25 cents', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  test('should return the correct coin combination for 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test('should return the correct coin combination for 100 cent', () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
  });

  test('should return the correct coin combination for 99 cent', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  test('should return the correct coin combination for 10 cent', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  test('should return the correct coin combination for 5 cent', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  test('return correct coin combination for large amount', () => {
    expect(getCoinCombination(40000)).toEqual([0, 0, 0, 1600]);
  });

  test('return the correct coin combination for large random amount', () => {
    expect(getCoinCombination(6587487)).toEqual([2, 0, 1, 263499]);
  });
});
