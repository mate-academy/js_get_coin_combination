'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test(`should return an array`, () => {
    expect(typeof getCoinCombination(18)).toBe('object');
  });

  test('should return [NaN, NaN, NaN, NaN] if input is not a number', () => {
    expect(getCoinCombination('cat')).toEqual([NaN, NaN, NaN, NaN]);
  });

  test(`should return [NaN, NaN, NaN, NaN] if input is empty`, () => {
    expect(getCoinCombination()).toEqual([NaN, NaN, NaN, NaN]);
  });

  test(`should return [0, 0, 0, 0] if input is 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  test(`should return [1, 0, 0, 0] if input is 1`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test(`should return [0, 1, 0, 0] if input is 5`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  test(`should return [1, 1, 0, 0] if input is 6`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test(`should return [0, 0, 1, 0] if input is 10`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  test(`should return [1, 1, 1, 0] if input is 16`, () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  test(`should return [0, 0, 0, 1] if input is 25`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  test(`should return [1, 1, 1, 1] if input is 41`, () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  test(`should return [2, 1, 1, 1] if input is 42`, () => {
    expect(getCoinCombination(42)).toEqual([2, 1, 1, 1]);
  });
});
