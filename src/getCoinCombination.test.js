'use strict';

describe(`Function 'getCoinCombination':`, () => {
  const getCoinCombination = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(Array.isArray(getCoinCombination(100))).toBeTruthy();
  });

  it(`should return [0, 0, 0, 0] if amount = 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return [0, 0, 0, 0] if amount = 0`, () => {
    expect(getCoinCombination()).toEqual([0, 0, 0, 0]);
  });
});
