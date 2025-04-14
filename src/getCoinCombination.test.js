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

  it(`should be returned [4, 0, 0, 0] if enter 4 penny`, () => {
    expect(getCoinCombination(4))
      .toEqual([4, 0, 0, 0]);
  });

  it(`should be returned [0, 1, 0, 0] (1 nickel) if enter 5 penny`, () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it(`should be returned [1, 1, 0, 0] (1 penny + 1 nickel) 
    if enter 6 pennies`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`should be returned [0, 0, 1, 0] (1 dime) if enter 10 penny`, () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it(`should be returned [1, 0, 1, 0] (1 penny + 1 dime) 
    if enter 11 penny`, () => {
    expect(getCoinCombination(11))
      .toEqual([1, 0, 1, 0]);
  });

  it(`should be returned [2, 1, 1, 0] (2 pennies + 1 nickel + 1 dime)
    if enter 17 pennies`, () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  it(`should be returned [4, 0, 2, 0] (4 pennies + 2 dime)
    if enter 24 pennies`, () => {
    expect(getCoinCombination(24))
      .toEqual([4, 0, 2, 0]);
  });

  it(`should be returned [0, 0, 0, 1]  (1 quarter)
    if enter 25 pennies`, () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  it(`should be returned [1, 0, 0, 1] (1 pennie + 1 quarter)
    if enter 26 pennies`, () => {
    expect(getCoinCombination(26))
      .toEqual([1, 0, 0, 1]);
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
