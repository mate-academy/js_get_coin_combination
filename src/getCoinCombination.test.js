'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getCoinCombination(6))
      .toBeInstanceOf(Array);
  });

  it(`should return an array with 4 elements`, () => {
    expect(getCoinCombination(6))
      .toBeInstanceOf(Array);
  });

  it(`should return 0 if number of pennies 0`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return 0 if number of pennies null`, () => {
    expect(getCoinCombination(null))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return Nan if number of pennies underfined`, () => {
    expect(getCoinCombination())
      .toEqual([NaN, NaN, NaN, NaN]);
  });

  it(`should return [2, 1, 1, 0] if number of pennies 17`, () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  it(`should return Nan if instead number of pennies - string`, () => {
    expect(getCoinCombination('q'))
      .toEqual([NaN, NaN, NaN, NaN]);
  });

  it(`should return [0, 0, 0, 2] if number of pennies is 50`, () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });
});
