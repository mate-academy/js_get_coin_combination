'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`returns correct number of pennies`, () => {
    const result = getCoinCombination(2);

    expect(result).toEqual([2, 0, 0, 0]);
  });

  it(`returns correct number of nickels`, () => {
    const result = getCoinCombination(5);

    expect(result).toEqual([0, 1, 0, 0]);
  });

  it(`returns correct number of dimes`, () => {
    const result = getCoinCombination(10);

    expect(result).toEqual([0, 0, 1, 0]);
  });

  it(`returns correct number of quarters`, () => {
    const result = getCoinCombination(100);

    expect(result).toEqual([0, 0, 0, 4]);
  });

  it(`returns combination of the smallest possible number of coins,
    giving correct amount`, () => {
    const result = getCoinCombination(137);

    expect(result).toEqual([2, 0, 1, 5]);
  });
});
