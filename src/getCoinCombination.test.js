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

  it(`should return [1, 1, 0, 0] if amount = 6`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`should return [2, 1, 1, 0] if amount = 17`, () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  it(`should return [3, 0, 0, 2] if amount = 53`, () => {
    expect(getCoinCombination(53))
      .toEqual([3, 0, 0, 2]);
  });

  it(`should return [1, 1, 1, 8] if amount = 0`, () => {
    expect(getCoinCombination(216))
      .toEqual([1, 1, 1, 8]);
  });
});
