'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return pennies for amount in cents < 5`, () => {
    const expected = [1, 0, 0, 0];

    expect(getCoinCombination(1))
      .toEqual(expected); ;
  });

  it(`should return pennies and nickels for amount in cents < 10`, () => {
    const expected = [1, 1, 0, 0];

    expect(getCoinCombination(6))
      .toEqual(expected);
  });

  // eslint-disable-next-line max-len
  it(`should return pennies, nickels and dimes for amount in cents < 25`, () => {
    const expected = [2, 1, 1, 0];

    expect(getCoinCombination(17))
      .toEqual(expected);
  });

  // eslint-disable-next-line max-len
  it(`should return pennies, nickels, dimes and quarters for amount in cents > 25`, () => {
    const expected = [0, 0, 0, 2];

    expect(getCoinCombination(50))
      .toEqual(expected);
  });
});
