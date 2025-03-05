'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    const result = getCoinCombination(12);

    expect(result).toBeInstanceOf(Array);
  });

  it(`should return [0, 0, 0, 0] if amount = 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return [1, 0, 0, 0] if amount = 1`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return [2, 0, 0, 0] if amount = 2`, () => {
    expect(getCoinCombination(2)).toEqual([2, 0, 0, 0]);
  });

  it(`should return [0, 1, 0, 0] if amount = 5`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`should return [2, 1, 0, 0] if amount = 7`, () => {
    expect(getCoinCombination(7)).toEqual([2, 1, 0, 0]);
  });

  it(`should return [0, 0, 1, 0] if amount = 10`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`should return [3, 0, 1, 0] if amount = 13`, () => {
    expect(getCoinCombination(13)).toEqual([3, 0, 1, 0]);
  });

  it(`should return [0, 1, 1, 0] if amount = 15`, () => {
    expect(getCoinCombination(15)).toEqual([0, 1, 1, 0]);
  });

  it(`should return [1, 1, 1, 0] if amount = 16`, () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  it(`should return [0, 0, 2, 0] if amount = 20`, () => {
    expect(getCoinCombination(20)).toEqual([0, 0, 2, 0]);
  });

  it(`should return [4, 0, 2, 0] if amount = 24`, () => {
    expect(getCoinCombination(24)).toEqual([4, 0, 2, 0]);
  });

  it(`should return [0, 0, 0, 1] if amount = 25`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it(`should return [1, 0, 0, 1] if amount = 26`, () => {
    expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
  });

  it(`should return [0, 1, 0, 1] if amount = 30`, () => {
    expect(getCoinCombination(30)).toEqual([0, 1, 0, 1]);
  });

  it(`should return [3, 1, 0, 1] if amount = 33`, () => {
    expect(getCoinCombination(33)).toEqual([3, 1, 0, 1]);
  });

  it(`should return [0, 0, 1, 1] if amount = 35`, () => {
    expect(getCoinCombination(35)).toEqual([0, 0, 1, 1]);
  });

  it(`should return [0, 0, 0, 2] if amount = 50`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it(`should return [3, 1, 1, 2] if amount = 68`, () => {
    expect(getCoinCombination(68)).toEqual([3, 1, 1, 2]);
  });

  it(`should return [4, 0, 2, 3] if amount = 99`, () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });
});
