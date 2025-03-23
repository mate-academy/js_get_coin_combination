'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should return an array with pennies`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return an array with nickels`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should return an array with dimes`, () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  it(`should return an array with quaters`, () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
  });

  it(`should calculate all coins`, () => {
    expect(getCoinCombination(116)).toEqual([1, 1, 1, 4]);
  });
});
