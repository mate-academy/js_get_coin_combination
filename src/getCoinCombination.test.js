'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array with zeros`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return an array with when we have each one type of coins `, () => {
    expect(getCoinCombination(41))
      .toEqual([1, 1, 1, 1]);
  });

  it(`should return an array when we have 1 penny`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`should return an array when we have 1 nickel`, () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it(`should return an array when we have 1 dime`, () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it(`should return an array when we have 1 quarter`, () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  it(`should return an array when cents = 99`, () => {
    expect(getCoinCombination(99))
      .toEqual([4, 0, 2, 3]);
  });
});
