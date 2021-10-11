'use strict';

describe(`Function 'getCoinCombination':`, () => {
  const getCoinCombination = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getCoinCombination(1))
      .toBeInstanceOf(Array);
  });

  it(`should return [0, 0, 0, 0] if amount = 0`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return [1, 0, 0, 0] if amount = 1`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`should return [0, 0, 0, 4] if amount = 100`, () => {
    expect(getCoinCombination(100))
      .toEqual([0, 0, 0, 4]);
  });

  it(`should return [1, 1, 1, 4] if amount = 116`, () => {
    expect(getCoinCombination(116))
      .toEqual([1, 1, 1, 4]);
  });
  // write more tests here
});
