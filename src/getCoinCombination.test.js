'use strict';

describe(`Function 'getCoinCombination':`, () => {
  const getCoinCombination = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(typeof getCoinCombination()).toStrictEqual('object');
  });

  it(`should return [0, 0, 0, 0] if amount = 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  // write more tests here

  it(`should return 1 penny if amount of coins = 1`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return 1 penny and 1 nickel if amount of coins = 6`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should return 2 pennys, 1 nickel and 1 dime`
  + `if amount of coins = 17`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`should return 1 quarter if amount of coins = 25`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });
});
