'use strict';

describe(`'getCoinCombination' function`, () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should return [0, 0, 0, 0], when 'coins' = 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return [1, 0, 0, 0], when 'coins' = 1`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return [0, 1, 0 ,0], when 'coins' = 5`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`should return [1, 1, 0, 0] when 'coins' = 6`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should return [0, 0, 1, 0], when 'coins' = 10`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`should return [2, 1, 1, 0] when 'coins' = 17`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`should return [0, 0, 0, 1], when 'coins' = 25`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it(`should return [1, 1, 1, 1] when 'coins' = 41`, () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it(`should return [0, 0, 0, 2] when 'coins' = 50`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it(`should return [4, 0, 2, 3] when 'coins' = 99`, () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  it(`should return an array of length 4`, () => {
    expect(getCoinCombination(99).length).toBe(4);
  });
});
