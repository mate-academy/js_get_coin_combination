'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should be returned [1, 0, 0, 0] if enter 1 penny`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`should be returned [1, 1, 0, 0] (1 penny + 1 nickel) 
    if enter 6 pennies`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`should be returned [2, 1, 1, 0] (2 pennies + 1 nickel + 1 dime)
    if enter 17 pennies`, () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  it(`should be returned [0, 0, 0 , 2] (2 quarters) 
    if enter 50 pennies`, () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });

  it(`should be returned [0, 0, 0, 0] if enter 0 pennies`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });
});
