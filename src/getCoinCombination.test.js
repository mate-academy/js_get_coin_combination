'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test(`should return 1 penny when input 1 cent`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  test(`should return 1 penny + 1 nickel when input 6 cent`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  test(`should return 2 pennies + 1 nickel + 1 dime when input 17 cent`, () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  test(`should return 2 quarters when input 50 cent`, () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });

});
