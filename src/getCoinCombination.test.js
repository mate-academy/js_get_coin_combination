'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test(`must be the correct number of quarters`, () => {
    expect(getCoinCombination(73)[3]).toBe(2);
  });

  test(`must be the correct number of dimes `, () => {
    expect(getCoinCombination(73)[2]).toBe(2);
  });

  test(`must be the correct number of nickels `, () => {
    expect(getCoinCombination(9)[1]).toBe(1);
  });

  test(`must be the correct number of pennies `, () => {
    expect(getCoinCombination(3)[0]).toBe(3);
  });

  test(`must be the correct array of coins `, () => {
    expect(getCoinCombination(97)).toEqual([2, 0, 2, 3]);
  });
});
