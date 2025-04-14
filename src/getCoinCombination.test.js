'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('when we get 0, array should be [0, 0, 0, 0]', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  test('when we get 1, array should be [1, 0, 0, 0]', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test('when we get 2, array should be [2, 0, 0, 0]', () => {
    expect(getCoinCombination(2)).toEqual([2, 0, 0, 0]);
  });

  test('when we get 6, array should be [1, 1, 0, 0]', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test('when we get 16, array should be [1, 1, 1, 0]', () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  test('when we get 41, array should be [1, 1, 1, 1]', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  test('when we get 11, array should be [1, 0, 1, 0]', () => {
    expect(getCoinCombination(11)).toEqual([1, 0, 1, 0]);
  });

  test('when we get 26, array should be [1, 0, 0, 1]', () => {
    expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
  });

  test('when we get str, array should be [NaN, NaN, NaN, NaN]', () => {
    expect(getCoinCombination('qa')).toEqual([NaN, NaN, NaN, NaN]);
  });
});
