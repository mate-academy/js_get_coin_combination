'use strict';

describe(`Function 'getCoinCombination':`, () => {
  const getCoinCombination = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(expect.arrayContaining(
      getCoinCombination()));
  });

  it(`should return [0, 0, 0, 0] if amount = 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return 1 penny if amount = 1`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return 1 penny + 1 nickel if amount = 6`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should return 2 pennies + 1 nickel + 1 dime if amount = 17`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`should return 2 quarters if amount = 50`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
// The function returns an array where:
// coins[0] = number of pennies (1 penny = 1 cent)
// coins[1] = number of nickels (1 nickel = 5 cents)
// coins[2] = number of dimes (1 dime = 10 cents)
// coins[3] = number of quarters (1 quarter = 25 cents)

// Examples:

// getCoinCombination(1) = [1, 0, 0, 0] // 1 penny
// getCoinCombination(6) = [1, 1, 0, 0] // 1 penny + 1 nickel
// getCoinCombination(17) = [2, 1, 1, 0] // 2 pennies + 1 nickel + 1 dime
// getCoinCombination(50) = [0, 0, 0, 2] // 2 quarters
