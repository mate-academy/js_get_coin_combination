'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  test(`Function should return [0, 0, 0, 0] if amount of cents = 0`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  test(`Function should return [1, 0, 0, 0] if amount of cents = 1`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  test(`Function should return [4, 0, 0, 0] if amount of cents = 4`, () => {
    expect(getCoinCombination(4))
      .toEqual([4, 0, 0, 0]);
  });

  test(`Function should return [0, 1, 0, 0] if amount of cents = 5`, () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  test(`Function should return [1, 1, 0, 0] if amount of cents = 6`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  test(`Function should return [4, 1, 0, 0] if amount of cents = 9`, () => {
    expect(getCoinCombination(9))
      .toEqual([4, 1, 0, 0]);
  });

  test(`Function should return [0, 0, 1, 0] if amount of cents = 10`, () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  test(`Function should return [1, 0, 1, 0] if amount of cents = 11`, () => {
    expect(getCoinCombination(11))
      .toEqual([1, 0, 1, 0]);
  });

  test(`Function should return [4, 0, 2, 0] if amount of cents = 24`, () => {
    expect(getCoinCombination(24))
      .toEqual([4, 0, 2, 0]);
  });

  test(`Function should return [0, 0, 0, 1] if amount of cents = 25`, () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  test(`Function should return [1, 0, 0, 1] if amount of cents = 26`, () => {
    expect(getCoinCombination(26))
      .toEqual([1, 0, 0, 1]);
  });
});
