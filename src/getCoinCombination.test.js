'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });
  test(`should return the values 1, 0, 0, 0 when the input value is 1`, () => {
    expect(getCoinCombination(1)).toStrictEqual([1, 0, 0, 0]);
  });

  test(`should return the values 1, 1, 0, 0 when the input value is 6`, () => {
    expect(getCoinCombination(6)).toStrictEqual([1, 1, 0, 0]);
  });

  test(`should return the values 2, 1, 1, 0 when the input value is 17`, () => {
    expect(getCoinCombination(17)).toStrictEqual([2, 1, 1, 0]);
  });

  test(`should return the values 0, 0, 0, 1 when the input value is 25`, () => {
    expect(getCoinCombination(25)).toStrictEqual([0, 0, 0, 1]);
  });

  test(`should return the values 1, 1, 1, 1 when the input value is 41`, () => {
    expect(getCoinCombination(41)).toStrictEqual([1, 1, 1, 1]);
  });

  test(`should return the values 0, 0, 0, 0 when the input value is 0`, () => {
    expect(getCoinCombination(0)).toStrictEqual([0, 0, 0, 0]);
  });
});
