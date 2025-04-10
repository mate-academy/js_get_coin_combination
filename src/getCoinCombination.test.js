'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return array with '0' when '0' is entered`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return '1' pennie when '1' is entered`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`should return '1' nickel when '5' is entered`, () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it(`should return '1' dime when '10' is entered`, () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it(`should return '1' dime and '1' nickel when '15' is entered`, () => {
    expect(getCoinCombination(15))
      .toEqual([0, 1, 1, 0]);
  });

  it(`should return '2' dime when '20' is entered`, () => {
    expect(getCoinCombination(20))
      .toEqual([0, 0, 2, 0]);
  });

  it(`should return '1' quarter when '25' is entered`, () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  it(`should return '[4, 1, 1, 2]' when '69' is entered`, () => {
    expect(getCoinCombination(69))
      .toEqual([4, 1, 1, 2]);
  });
});
