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

  it(`should return [2, 1, 0, 3] if amount = 82`, () => {
    expect(getCoinCombination(82)).toEqual([2, 1, 0, 3]);
  });

  it(`should return [0, 0, 0, 0] if amount = 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return [0, 0, 2, 0] if amount = 20`, () => {
    expect(getCoinCombination(20)).toEqual([0, 0, 2, 0]);
  });

  it(`should return [4, 0, 2, 3] if amount = 99`, () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  // write more tests here
});
