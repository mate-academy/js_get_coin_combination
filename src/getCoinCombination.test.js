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

  it(`should return [2, 0, 0, 0] if amount = 2`, () => {
    expect(getCoinCombination(2)).toEqual([2, 0, 0, 0]);
  });

  it(`should return [0, 1, 0, 0] if amount = 5`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`should return [0, 0, 1, 0] if amount = 10`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`should return [4, 0, 2, 0] if amount = 24`, () => {
    expect(getCoinCombination(24)).toEqual([4, 0, 2, 0]);
  });

  it(`should return [1, 0, 2, 1] if amount = 46`, () => {
    expect(getCoinCombination(46)).toEqual([1, 0, 2, 1]);
  });

  it(`should return [0, 0, 0, 1] if amount = 100`, () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
  });
});
