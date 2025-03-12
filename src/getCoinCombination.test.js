'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should be all 0 when input is 0 cents`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should count pennies when input 1-4 cents`, () => {
    expect(getCoinCombination(2))
      .toEqual([2, 0, 0, 0]);
  });

  it(`should count 4 pennies when input 4 cents`, () => {
    expect(getCoinCombination(4))
      .toEqual([4, 0, 0, 0]);
  });

  it(`should count 1 nickel when input 5 cents`, () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it(`should count nickels and pennies when input 5-9 cents`, () => {
    expect(getCoinCombination(7))
      .toEqual([2, 1, 0, 0]);
  });

  it(`should count nickels and pennies when input 9 cents`, () => {
    expect(getCoinCombination(9))
      .toEqual([4, 1, 0, 0]);
  });

  it(`should count 1 dime when input 10 cents`, () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it(`should count dimes and other coins when input 10-24 cents`, () => {
    expect(getCoinCombination(15))
      .toEqual([0, 1, 1, 0]);
  });

  it(`should count dimes and other coins when input 24 cents`, () => {
    expect(getCoinCombination(24))
      .toEqual([4, 0, 2, 0]);
  });

  it(`should count 1 quarter when input 25 cents`, () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  it(`should count quarters when input more than 25 cents`, () => {
    expect(getCoinCombination(41))
      .toEqual([1, 1, 1, 1]);
  });

  it(`should count quarters twice when input more than 50 cents`, () => {
    expect(getCoinCombination(74))
      .toEqual([4, 0, 2, 2]);
  });

  it(`should count quarters twice when input is 75 cents`, () => {
    expect(getCoinCombination(75))
      .toEqual([0, 0, 0, 3]);
  });
});
