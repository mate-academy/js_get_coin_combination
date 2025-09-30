'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should return the [0, 0, 0, 0], when 'coins' = 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should retun the [1, 0, 0, 0], when 'coins' = 1`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return the [0, 1, 0 ,0], when 'coins' = 5`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`should return the [0, 0, 1, 0], when 'coins' = 10`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`should return the [0, 0, 0, 1], when 'coins' = 25`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it(`should return [1, 1, 1, 1] when 'coins' = 41`, () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it(`should return [4, 0, 2, 3] when 'coins' = 99`, () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  it(`should return an array of length 4`, () => {
    expect(getCoinCombination(99).length).toBe(4);
  });
});
