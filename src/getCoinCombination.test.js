'use strict';

describe(`Function 'getCoinCombination':`, () => {
  const getCoinCombination = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getCoinCombination([]))
      .toBeInstanceOf(Array);
  });

  it(`should return [0, 0, 0, 0] if amount = 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return [0, 0, 0, 0] if amount = 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return minimum number of coins combination 
    of the same value`, () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it(`should return minimum number of coins combination 
    of the same value`, () => {
    expect(getCoinCombination(40)).toEqual([0, 1, 1, 1]);
  });

  it(`should return minimum number of coins combination 
    of the same value`, () => {
    expect(getCoinCombination(42)).toEqual([2, 1, 1, 1]);
  });
});
