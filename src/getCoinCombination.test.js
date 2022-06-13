'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`Should return array with one penny`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`should return array with zero value`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return array with zero value`, () => {
    expect(getCoinCombination(null))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return empty array when input is not a number`, () => {
    expect(getCoinCombination('null'))
      .toEqual([NaN, NaN, NaN, NaN]);
  });

  it(`should return array filed all kind of coins`, () => {
    expect(getCoinCombination(67))
      .toEqual([2, 1, 1, 2]);
  });
});
