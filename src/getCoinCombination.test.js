'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test(`should return 1 penny when input 1 cent`, () => {
    const inputCent = 1;
    expect(getCoinCombination(inputCent))
      .toEqual([1, 0, 0, 0]);
  });

  test(`should return 1 penny + 1 nickel when input 6 cent`, () => {
    const inputCent = 6;
    expect(getCoinCombination(inputCent))
      .toEqual([1, 1, 0, 0]);
  });

  test(`should return 2 pennies + 1 nickel + 1 dime when input 17 cent`, () => {
    const inputCent = 17;
    expect(getCoinCombination(inputCent))
      .toEqual([2, 1, 1, 0]);
  });

  test(`should return 2 quarters when input 50 cent`, () => {
    const inputCent = 50;
    expect(getCoinCombination(inputCent))
      .toEqual([0, 0, 0, 2]);
  });

});
