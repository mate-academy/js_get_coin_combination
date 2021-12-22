'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return array [0, 0, 0, 0] if the number of cents equals 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return array [1, 0, 0, 0] if the number of cents equals 1`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return array [4, 0, 0, 0] if the number of cents equals 4`, () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it(`should return array [5, 0, 0, 0] if the number of cents equals 5`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`should return array [1, 1, 0, 0] if the number of cents equals 6`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should return array [0, 0, 1, 0]
  if the number of cents equals 10`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`should return array [1, 1, 1, 0]
  if the number of cents equals 16`, () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  it(`should return array [1, 1, 1, 1]
  if the number of cents equals 41`, () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });
});
