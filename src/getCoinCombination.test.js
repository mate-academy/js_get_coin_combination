'use strict';

describe(`Function 'getCoinCombination':`, () => {
  const getCoinCombination = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getCoinCombination(5)).toBeInstanceOf(Array);
  });

  it(`should return [0, 0, 0, 0] if amount = 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return [1, 0, 0, 0] if amount = 1`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return [4, 0, 2, 3] if amount = 99`, () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  it(`should return [0, 0, 0, 2] if amount = 50`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it(`should return [0, 0, 0, 4] if amount = 100`, () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
  });

  // write more tests here
});
