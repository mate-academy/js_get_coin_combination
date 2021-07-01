'use strict';

describe(`Function 'getCoinCombination':`, () => {
  const getCoinCombination = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getCoinCombination()).toBeInstanceOf(Array);
  });

  it(`should return [0, 0, 0, 0] if amount = 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return 4 pennies [4, 0, 0, 0] if amount = 4`, () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it(`should return 1 penny, 1 nickel [1, 1, 0, 0] if amount = 6`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should return 2 pennies, 1 nickel, 1 dime [2, 1, 1, 0]
  if amount = 17`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`should return 2 quarters [0, 0, 0, 2] if amount = 50`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it(`should return 2 pennies, 1 nickel, 1 dime, 2 quarter [2, 1, 1, 2]
  if amount = 67`, () => {
    expect(getCoinCombination(67)).toEqual([2, 1, 1, 2]);
  });
});
