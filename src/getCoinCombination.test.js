'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should be one 'penny' if there is 1 'cent'`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should be one 'nickel' if there is 5 'cents'`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`should be one 'dime' if there is 10 'cents'`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`should be one 'quarter' if there is 25 'cents'`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it(`should be 2 'pennies', 1 'nickel', 1 'dime' and 2 'quarters' if there is 76 'cents'`, () => {
    expect(getCoinCombination(67)).toEqual([2, 1, 1, 2]);
  });
});
