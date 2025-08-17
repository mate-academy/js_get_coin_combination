'use strict';

const getCoinCombination = require('./getCoinCombination');

describe('getCoinCombination', () => {
  test('should return correct combination for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  test('should return correct combination for 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test('should return correct combination for 5 cents', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  test('should return correct combination for 6 cents', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test('should return correct combination for 10 cents', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  test('should return correct combination for 17 cents', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  test('should return correct combination for 25 cents', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  test('should return correct combination for 50 cents', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  test('should return correct combination for 99 cents', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  test('should return correct combination for 41 cents', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });
});
