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

  it(`should return [1, 0, 0, 0] if amount = 1`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`should return [0, 1, 0, 0] if amount = 5`, () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it(`should return [1, 1, 0, 0] if amount = 6`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`should return [0, 0, 1, 0] if amount = 10`, () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it(`should return [1, 0, 1, 0] if amount = 11`, () => {
    expect(getCoinCombination(11))
      .toEqual([1, 0, 1, 0]);
  });

  it(`should return [0, 0, 0, 1] if amount = 25`, () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  it(`should return [1, 0, 0, 1] if amount = 26`, () => {
    expect(getCoinCombination(26))
      .toEqual([1, 0, 0, 1]);
  });

  it(`should return [1, 1, 1, 8] if amount = 216`, () => {
    expect(getCoinCombination(216))
      .toEqual([1, 1, 1, 8]);
  });
});
