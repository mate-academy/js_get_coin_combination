'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`arg number - add penny`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`arg number - add nickel`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`arg number - add dime`, () => {
    expect(getCoinCombination(75)).toEqual([0, 0, 0, 3]);
  });

  it(`arg number - add quarters`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`arg number - add penny and nickel`, () => {
    expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
  });

  it(`arg number - add dime and quarters`, () => {
    expect(getCoinCombination(70)).toEqual([0, 0, 2, 2]);
  });

  it(`arg fractional number`, () => {
    expect(getCoinCombination(1.5)).toEqual([1, 0, 0, 0]);
  });

  it(`arg invalid value`, () => {
    expect(getCoinCombination('test')).toEqual([NaN, NaN, NaN, NaN]);
  });

  it(`arg negative number`, () => {
    expect(getCoinCombination(-100)).toEqual([0, 0, 0, -4]);
  });
});
