'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
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

  test('should return correct combination for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  test('should return correct combination for 100 cents', () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
  });

  test('should return correct combination for 101 cents', () => {
    expect(getCoinCombination(101)).toEqual([1, 0, 0, 4]);
  });

  test('should return correct combination for 105 cents', () => {
    expect(getCoinCombination(105)).toEqual([0, 1, 0, 4]);
  });

  test('should return correct combination for 110 cents', () => {
    expect(getCoinCombination(110)).toEqual([0, 0, 1, 4]);
  });

  test('should return correct combination for 125 cents', () => {
    expect(getCoinCombination(125)).toEqual([0, 0, 0, 5]);
  });

  test('should return correct combination for 200 cents', () => {
    expect(getCoinCombination(200)).toEqual([0, 0, 0, 8]);
  });
});
