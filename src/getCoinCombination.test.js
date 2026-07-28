'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should be 1 'penny' if there is 1 'cent'`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should be 1 'penny' and 1 'nickel' if there is 6 'cents'`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should be 2 'pennies', 1 'nickel' and 1 'dime' if there is 17 'cents'`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`should be 2 'quarters' if there is 50 'cents'`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it(`should be 2 'pennies', 1 'nickel', 1 'dime' and 2 'quarters' if there is 67 'cents'`, () => {
    expect(getCoinCombination(67)).toEqual([2, 1, 1, 2]);
  });
});
