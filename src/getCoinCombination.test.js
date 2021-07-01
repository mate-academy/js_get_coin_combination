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

  it(`should return [1, 1, 0, 0] if amount = 6`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should return [2, 1, 1, 0] if amount = 17`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`should return [0, 0, 0, 2] if amount = 50`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it(`should return [3, 0, 0, 3] if amount = 78`, () => {
    expect(getCoinCombination(78)).toEqual([3, 0, 0, 3]);
  });

  it(`should return [3, 0, 2, 4] if amount = 123`, () => {
    expect(getCoinCombination(123)).toEqual([3, 0, 2, 4]);
  });

  it(`should return [1, 1, 1, 1] if amount = 41`, () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });
});
