"use strict";

describe(`getCoinCombination`, () => {
  const { getCoinCombination } = require("./getCoinCombination");

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should be positive number`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`should be limit values`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
    expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
    expect(getCoinCombination(33)).toEqual([3, 1, 0, 1]);
  });

  it(`should be high values`, () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
  });

  it(`should be penny`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should be nickel`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`should be daimy`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`should be quarters`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it(`should be integer`, () => {
    expect(getCoinCombination("1")).toEqual([0, 0, 0, 0]);
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
    expect(getCoinCombination(NaN)).toEqual([0, 0, 0, 0]);
    expect(getCoinCombination(null)).toEqual([0, 0, 0, 0]);
  });
});
