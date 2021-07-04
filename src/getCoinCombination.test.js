'use strict';

describe(`Function 'getCoinCombination':`, () => {
  const getCoinCombination = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getCoinCombination())
      .toBeInstanceOf(Array);
  });

  it(`should return [0, 0, 0, 0] if amount = 0`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return [4, 0, 0, 0] if amount = 4`, () => {
    expect(getCoinCombination(4))
      .toEqual([4, 0, 0, 0]);
  });

  it(`should return [0, 1, 0, 0] if amount = 5`, () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it(`should return [4, 1, 0, 0] if amount = 9`, () => {
    expect(getCoinCombination(9))
      .toEqual([4, 1, 0, 0]);
  });

  it(`should return [4, 0, 1, 0] if amount = 14`, () => {
    expect(getCoinCombination(14))
      .toEqual([4, 0, 1, 0]);
  });

  it(`should return [4, 1, 1, 0] if amount = 19`, () => {
    expect(getCoinCombination(19))
      .toEqual([4, 1, 1, 0]);
  });

  it(`should return [4, 1, 1, 1] if amount = 44`, () => {
    expect(getCoinCombination(44))
      .toEqual([4, 1, 1, 1]);
  });

  it(`should return [4, 0, 0, 1] if amount = 29`, () => {
    expect(getCoinCombination(29))
      .toEqual([4, 0, 0, 1]);
  });

  it(`should return [4, 1, 0, 1] if amount = 34`, () => {
    expect(getCoinCombination(34))
      .toEqual([4, 1, 0, 1]);
  });

  it(`should return [4, 0, 1, 1] if amount = 39`, () => {
    expect(getCoinCombination(39))
      .toEqual([4, 0, 1, 1]);
  });
});
