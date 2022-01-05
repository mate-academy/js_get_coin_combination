'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test(`should return an array`, () => {
    expect(getCoinCombination())
      .toBeInstanceOf(Array);
  });
 
  test(`should return 0 coins when input is 0 cents`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  test(`should return 1 penny when input is 1 cent`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  test(`should return 1 penny and 1 nickel when input is 6 cents`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  test(`should return 2 pennies, 1 nickel, and 1 dime
   when input is 17 cents`, () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  test(`should return 1 quarter when input is 25 cents`, () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  test(`should return 2 pennies, 1 nickel, 1 dime, and 2 quarters
   when input is 67 cents`, () => {
    expect(getCoinCombination(67))
      .toEqual([2, 1, 1, 2]);
  });

  test(`input must be positive numbers`, () => {
    expect(getCoinCombination(-25))
      .toEqual([0, 0, 0, -1]);
  });

  test(`input must be numbers`, () => {
    expect(getCoinCombination('asd'))
      .toEqual([NaN, NaN, NaN, NaN]);
  });
});
