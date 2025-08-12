'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should add zeros`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should add pennies`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`should add pennies`, () => {
    expect(getCoinCombination(2))
      .toEqual([2, 0, 0, 0]);
  });

  it(`should add pennies`, () => {
    expect(getCoinCombination(4))
      .toEqual([4, 0, 0, 0]);
  });

  it(`should add nickels`, () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it(`should add nickels`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`should add nickels`, () => {
    expect(getCoinCombination(9))
      .toEqual([4, 1, 0, 0]);
  });

  it(`should add dimes`, () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it(`should add dimes`, () => {
    expect(getCoinCombination(11))
      .toEqual([1, 0, 1, 0]);
  });

  it(`should add dimes`, () => {
    expect(getCoinCombination(24))
      .toEqual([4, 0, 2, 0]);
  });

  it(`should add quarters`, () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  it(`should add quarters`, () => {
    expect(getCoinCombination(26))
      .toEqual([1, 0, 0, 1]);
  });
});
