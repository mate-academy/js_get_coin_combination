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

  it(`should return [1, 1, 0, 0] if amount = 6`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should return [1, 1, 1, 0] if amount = 16`, () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  it(`should return [1, 1, 1, 1] if amount = 41`, () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it(`should return [1, 1, 1, 2] if amount = 66`, () => {
    expect(getCoinCombination(66)).toEqual([1, 1, 1, 2]);
  });

  it(`should return [2, 1, 1, 1] if amount = 42`, () => {
    expect(getCoinCombination(42)).toEqual([2, 1, 1, 1]);
  });
});
