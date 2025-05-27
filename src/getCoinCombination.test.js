'use strict';

const { getCoinCombination } = require('./getCoinCombination');

describe(`Function 'getCoinCombination':`, () => {
  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should return [1, 0, 0, 0] for 1 cent`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return [1, 1, 0, 0] for 6 cents`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should return [2, 1, 1, 0] for 17 cents`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`should return [0, 0, 0, 2] for 50 cents`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it(`should return [4, 0, 0, 0] for 4 cents`, () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it(`should return [0, 0, 0, 0] for 0 cents`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return [3, 0, 2, 1] for 48 cents`, () => {
    // 1 quarter (25) + 2 dimes (20) + 3 pennies (3) = 48
    expect(getCoinCombination(48)).toEqual([3, 0, 2, 1]);
  });

  it(`should return [4, 1, 0, 4] for 109 cents`, () => {
    // 4 quarters (100) + 1 nickel (5) + 4 pennies (4) = 109
    expect(getCoinCombination(109)).toEqual([4, 1, 0, 4]);
  });

  it(`should return [4, 0, 1, 11] for 289 cents`, () => {
    // 11 quarters (275) + 1 dime (10) + 4 pennies = 289
    expect(getCoinCombination(289)).toEqual([4, 0, 1, 11]);
  });
});
