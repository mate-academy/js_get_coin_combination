'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`it should return an array `, () => {
    expect(getCoinCombination()).toBeInstanceOf(Array);
  });

  test(`it should return [0, 0, 0, 0] if amount = 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  test(`it should return [1, 0, 0, 0] if amount = 1`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  test(`it should return [1, 1, 0, 0] if amount = 6`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test(`it should return [4, 1, 0, 0] if amount = 9`, () => {
    expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
  });

  test(`it should return [2, 1, 1, 0] if amount = 17 `, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  test(`it should return [4, 0, 2, 0] if amount = 24 `, () => {
    expect(getCoinCombination(24)).toEqual([4, 0, 2, 0]);
  });

  test(`it should return [0, 0, 0, 1] if amount = 25`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  test(`it should return [0, 0, 0, 2] if amount = 50`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
