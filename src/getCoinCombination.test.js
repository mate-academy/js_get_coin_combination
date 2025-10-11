'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return correct result for 0`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return correct result for 1`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`should return correct result for 6`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`should return correct result for 16`, () => {
    expect(getCoinCombination(16))
      .toEqual([1, 1, 1, 0]);
  });

  it(`should return correct result for 31`, () => {
    expect(getCoinCombination(31))
      .toEqual([1, 1, 0, 1]);
  });

  it(`should return correct result for 99`, () => {
    expect(getCoinCombination(99))
      .toEqual([4, 0, 2, 3]);
  });

  it(`should return correct result for 100`, () => {
    expect(getCoinCombination(100))
      .toEqual([0, 0, 0, 4]);
  });

  it(`should return correct result for -1`, () => {
    expect(getCoinCombination(-1))
      .toEqual([0, 0, 0, 0]);
  });
});
