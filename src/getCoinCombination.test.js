'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test(`should return 1 penny if input is 1`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test(`should return 2 penny 1 nickel if input is 7`, () => {
    expect(getCoinCombination(7)).toEqual([2, 1, 0, 0]);
  });

  test(`should return 4 penny 1 nickel 1 dime if input is 19`, () => {
    expect(getCoinCombination(19)).toEqual([4, 1, 1, 0]);
  });

  test(`should return 2 quarters if input is 50`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
