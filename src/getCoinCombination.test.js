'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`0 cent should return 0 penny, nickel, dime, quarters`, () => {
    expect(getCoinCombination(0))
      .toStrictEqual([0, 0, 0, 0]);
  });

  it(`1 cent should return 1 penny, 0 nickel, dime, quarters`, () => {
    expect(getCoinCombination(1))
      .toStrictEqual([1, 0, 0, 0]);
  });

  it(`6 cent should return 1 penny, nickel, 0 dime, quarters`, () => {
    expect(getCoinCombination(6))
      .toStrictEqual([1, 1, 0, 0]);
  });

  it(`17 cent should return 2 penny, 1 nickel, dime, 0 quarters`, () => {
    expect(getCoinCombination(17))
      .toStrictEqual([2, 1, 1, 0]);
  });
  it(`50 cent should return 0 penny, nickel, dime, 2 quarters`, () => {
    expect(getCoinCombination(50))
      .toStrictEqual([0, 0, 0, 2]);
  });
  it(`99 cent should return correct penny, nickel, dime, quarters`, () => {
    expect(getCoinCombination(99))
      .toStrictEqual([4, 0, 2, 3]);
  });
});
