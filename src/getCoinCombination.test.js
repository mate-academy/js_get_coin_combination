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

  it(`should return Undefined if amount is empty`, () => {
    expect(getCoinCombination()).toBeUndefined();
  });

  it(`should return Undefined if amount = -100`, () => {
    expect(getCoinCombination(-100)).toBeUndefined();
  });

  it(`should return [1, 0, 0, 0] if amount = 1`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return [1, 1, 0, 0] if amount = 7`, () => {
    expect(getCoinCombination(7)).toEqual([2, 1, 0, 0]);
  });

  it(`should return [2, 1, 1, 0] if amount = 17`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`should return [0, 0, 0, 1] if amount = 50`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it(`should return [4, 0, 2, 2] if amount = 74`, () => {
    expect(getCoinCombination(74)).toEqual([4, 0, 2, 2]);
  });

  it(`should return NaN if amount = 'ABC'`, () => {
    expect(getCoinCombination('ABC')).toBeNaN();
  });
});
