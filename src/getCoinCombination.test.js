'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return [0, 0, 0, 0] for 0 value`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return [4, 0, 0, 0] for 4 cents`, () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it(`should return [0, 1, 0, 0] for 5 cents`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`should return [1, 1, 0, 0] for 6 cents`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should return [0, 0, 1, 0] for 10 cents`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`should return [1, 0, 1, 0] for 11 cents`, () => {
    expect(getCoinCombination(11)).toEqual([1, 0, 1, 0]);
  });

  it(`should return [0, 1, 1, 0] for 15 cents`, () => {
    expect(getCoinCombination(15)).toEqual([0, 1, 1, 0]);
  });

  it(`should return [1, 1, 1, 0] for 16 cents`, () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  it(`should return [2, 1, 1, 0] for 17 cents`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`should return [0, 0, 2, 0] for 20 cents`, () => {
    expect(getCoinCombination(20)).toEqual([0, 0, 2, 0]);
  });

  it(`should return [0, 0, 0, 1] for 25 cents`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it(`should return [1, 0, 0, 1] for 26 cents`, () => {
    expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
  });

  it(`should return [0, 1, 0, 1] for 30 cents`, () => {
    expect(getCoinCombination(30)).toEqual([0, 1, 0, 1]);
  });

  it(`should return [0, 0, 0, 2] for 50 cents`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it(`should return [2, 0, 0, 3] for 77 cents`, () => {
    expect(getCoinCombination(77)).toEqual([2, 0, 0, 3]);
  });

  it(`should return [3, 1, 1, 21] for 543 cents`, () => {
    expect(getCoinCombination(543)).toEqual([3, 1, 1, 21]);
  });
});