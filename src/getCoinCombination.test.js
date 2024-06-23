'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return '1' penny when '1' is entered`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return '1' nickel when '5' is entered`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`should return '1' dime when '10' is entered`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`should return '1' quarters when '25' is entered`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });
});
