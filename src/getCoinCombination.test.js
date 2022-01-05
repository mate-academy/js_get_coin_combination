'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test(`should return an array`, () => {
    expect(getCoinCombination())
      .toBeInstanceOf(Array);
  });

  test(`should return [0, 0, 0, 0] when input is (0)`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  test(`should return [1, 0, 0, 0] when input is (1)`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  test(`should return [1, 1, 0, 0] when input is (6)`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  test(`should return [2, 1, 1, 0] when input is (17)`, () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  test(`should return [0, 0, 0, 1] when input is (25)`, () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  test(`should return [2, 1, 1, 2] when input is (67)`, () => {
    expect(getCoinCombination(67))
      .toEqual([2, 1, 1, 2]);
  });

  test(`should return empty array when input is negative numbers`, () => {
    expect(getCoinCombination(-25))
      .toEqual([0, 0, 0, -1]);
  });

  test(`should return empty array when input is string`, () => {
    expect(getCoinCombination('asd'))
      .toEqual([NaN, NaN, NaN, NaN]);
  });
});
