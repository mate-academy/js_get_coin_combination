'use strict';

describe(`Function 'getCoinCombination':`, () => {
  const getCoinCombination = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getCoinCombination([]))
      .toBeInstanceOf(Array);
  });

  it(`should return [0, 0, 0, 0] if amount = 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return 1 penny, 1 nickel, 1 dime, 1 quarter if amount = '41`, () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it(`should return 0 penny, 1 nickel, 1 dime, 1 quarter if amount = '40`, () => {
    expect(getCoinCombination(40)).toEqual([0, 1, 1, 1]);
  });

  it(`should return 2 penny, 1 nickel, 1 dime, 1 quarter if amount = '42`, () => {
    expect(getCoinCombination(42)).toEqual([2, 1, 1, 1]);
  });

  it(`should return 2 quarters if amount = '50`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
