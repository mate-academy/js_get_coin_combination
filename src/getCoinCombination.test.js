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

  it(`should return [1, 0, 0, 0] if amount = 1`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return [2, 1, 0, 0] if amount = 7`, () => {
    expect(getCoinCombination(7)).toEqual([2, 1, 0, 0]);
  });

  it(`should return [2, 0, 1, 0] if amount = 12`, () => {
    expect(getCoinCombination(12)).toEqual([2, 0, 1, 0]);
  });

  it(`should return [2, 1, 0, 1] if amount = 32`, () => {
    expect(getCoinCombination(32)).toEqual([2, 1, 0, 1]);
  });
  // write more tests here
});
