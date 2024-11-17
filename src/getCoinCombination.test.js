'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return [1, 0, 0, 0]`
    + `when Cents === 1`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`should return [1, 1, 0, 0]`
    + `when Cents === 6`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`should return [2, 1, 1, 0]`
    + `when Cents === 17`, () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  it(`should return [0, 0, 0, 2]`
    + `when Cents === 50`, () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });
});
