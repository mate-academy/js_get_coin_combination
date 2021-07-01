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

  it(`should return [0, 1, 0, 0] if amount = 5`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`should return [0, 0, 1, 0] if amount = 10`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`should return [0, 0, 0, 1] if amount = 25`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it(`should return [1, 1, 1, 1] if amount = 41`, () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it(`should return [3, 0, 0, 0] if amount = 3`, () => {
    expect(getCoinCombination(3)).toEqual([3, 0, 0, 0]);
  });

  it(`should return [3, 1, 0, 0] if amount = 8`, () => {
    expect(getCoinCombination(8)).toEqual([3, 1, 0, 0]);
  });

  it(`should return [3, 1, 1, 0] if amount = 18`, () => {
    expect(getCoinCombination(18)).toEqual([3, 1, 1, 0]);
  });

  it(`should return [4, 0, 2, 7] if amount = 199`, () => {
    expect(getCoinCombination(199)).toEqual([4, 0, 2, 7]);
  });
});
