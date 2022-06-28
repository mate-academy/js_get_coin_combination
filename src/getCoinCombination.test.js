'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return 1 penny and 1 nickel`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`should return 2 quaters and 1 nickel`, () => {
    expect(getCoinCombination(55))
      .toEqual([0, 1, 0, 2]);
  });

  it(`should return NaN when input is not digit`, () => {
    expect(getCoinCombination('qwerty'))
      .toEqual([NaN, NaN, NaN, NaN]);
  });

  it(`should return 1 pennie , 1 nickel and 1 dime`, () => {
    expect(getCoinCombination(16))
      .toEqual([1, 1, 1, 0]);
  });

  it(`should return 1 pennie, 1 nickel, 1 dime and 1 quater `, () => {
    expect(getCoinCombination(41))
      .toEqual([1, 1, 1, 1]);
  });
});
