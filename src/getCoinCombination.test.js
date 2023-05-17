'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return array with zeros when input equals 0`, () => {
    expect(getCoinCombination(0))
      .toStrictEqual([0, 0, 0, 0]);
  });

  it(`should properly count pennies`, () => {
    expect(getCoinCombination(1))
      .toStrictEqual([1, 0, 0, 0]);
  });

  it(`should properly count nickels`, () => {
    expect(getCoinCombination(6))
      .toStrictEqual([1, 1, 0, 0]);
  });

  it(`should properly count dimes`, () => {
    expect(getCoinCombination(17))
      .toStrictEqual([2, 1, 1, 0]);
  });

  it(`should properly count quarters`, () => {
    expect(getCoinCombination(50))
      .toStrictEqual([0, 0, 0, 2]);
  });
});
