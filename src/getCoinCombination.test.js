'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array with 4 elements`, () => {
    const result = getCoinCombination();

    expect(result.length).toBe(4);
  });

  it(`should return valid value for 0 cent`, () => {
    expect(getCoinCombination(0))
      .toStrictEqual([0, 0, 0, 0]);
  });

  it(`should return valid value for 1 cent`, () => {
    expect(getCoinCombination(1))
      .toStrictEqual([1, 0, 0, 0]);
  });

  it(`should return valid value for 6 cent`, () => {
    expect(getCoinCombination(6))
      .toStrictEqual([1, 1, 0, 0]);
  });

  it(`should return valid value for 17 cent`, () => {
    expect(getCoinCombination(17))
      .toStrictEqual([2, 1, 1, 0]);
  });

  it(`should return valid value for 50 cent`, () => {
    expect(getCoinCombination(50))
      .toStrictEqual([0, 0, 0, 2]);
  });

  it(`should return valid value for 999 cent`, () => {
    expect(getCoinCombination(999))
      .toStrictEqual([4, 0, 2, 39]);
  });

  it(`should return valid value for a large amount of cents`, () => {
    expect(getCoinCombination(9007199254740991))
      .toStrictEqual([1, 1, 1, 360287970189639]);
  });
});
