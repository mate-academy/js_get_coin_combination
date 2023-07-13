'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return number of pennies`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return number of nickels`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`should return number of dimes`, () => {
    expect(getCoinCombination(2))
      .toEqual([2, 0, 0, 0]);
  });

  it(`should return number of quarters`, () => {
    expect(getCoinCombination(3))
      .toEqual([3, 0, 0, 0]);
  });
});
