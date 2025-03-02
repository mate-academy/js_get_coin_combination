'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return [1, 1, 0, 0] when input = 6`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`should return [2, 1, 1, 0] when input = 17`, () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  it(`should return [1, 1, 1, 1] when input = 42`, () => {
    expect(getCoinCombination(41))
      .toEqual([1, 1, 1, 1]);
  });

  it(`should return [1, 0, 0, 40] when input = 1001`, () => {
    expect(getCoinCombination(1001))
      .toEqual([1, 0, 0, 40]);
  });

  it(`should return [0, 0, 0, 0] when input < 1`, () => {
    expect(getCoinCombination(-1))
      .toEqual([0, 0, 0, 0]);
  });
});
