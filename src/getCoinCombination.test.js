'use strict';

describe(`Function 'getCoinCombination':`, () => {
  const getCoinCombination = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getCoinCombination(12)).toBeInstanceOf(Array);
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

  it(`should return [4, 1, 0, 0] if amount = 9`, () => {
    expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
  });

  it(`should return [4, 1, 1, 0] if amount = 19`, () => {
    expect(getCoinCombination(19)).toEqual([4, 1, 1, 0]);
  });

  it(`should return [4, 1, 1, 1] if amount = 44`, () => {
    expect(getCoinCombination(44)).toEqual([4, 1, 1, 1]);
  });

  it(`should return [3, 1, 1, 6] if amount = 168`, () => {
    expect(getCoinCombination(168)).toEqual([3, 1, 1, 6]);
  });

  it(`should return [0, 0, 0, 4] if amount = 100`, () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
  });
});
