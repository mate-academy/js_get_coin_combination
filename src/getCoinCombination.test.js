'use strict';

describe(`Function 'getCoinCombination':`, () => {
  const getCoinCombination = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getCoinCombination()).toBeInstanceOf(Array);
  });

  it(`should return [0, 0, 0, 0] if amount = 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return [1, 0, 0, 0] if amount = 1`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return [1, 0, 0, 2] if amount = 51`, () => {
    expect(getCoinCombination(51)).toEqual([1, 0, 0, 2]);
  });

  it(`should return [2, 1, 1, 0] if amount = 17`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`should return [1, 1, 1, 5] if amount = 141`, () => {
    expect(getCoinCombination(141)).toEqual([1, 1, 1, 5]);
  });

  it(`should return [4, 0, 1, 0] if amount = 14`, () => {
    expect(getCoinCombination(14)).toEqual([4, 0, 1, 0]);
  });
});
