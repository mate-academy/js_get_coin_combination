'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should return zeros for value of 0`, () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it(`should return one penny for value of 1`, () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  it(`should return one nickel and one penny for value of 6`, () => {
    const result = getCoinCombination(6);

    expect(result).toEqual([1, 1, 0, 0]);
  });

  it(`should return 2 penny, 1 nickel and 1 dime for value of 17`, () => {
    const result = getCoinCombination(17);

    expect(result).toEqual([2, 1, 1, 0]);
  });

  it(`should return 2 quarter for value of 50`, () => {
    const result = getCoinCombination(50);

    expect(result).toEqual([0, 0, 0, 2]);
  });
});
