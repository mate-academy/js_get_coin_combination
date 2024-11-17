"use strict";

describe("getCoinCombination", () => {
  const { getCoinCombination } = require("./getCoinCombination");

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`Should return [0, 0, 0, 0] if 'cents' === 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`Should return [0, 0, 0, 0] if 'cents' is NaN`, () => {
    expect(getCoinCombination(NaN)).toEqual([0, 0, 0, 0]);
  });

  it(`Should return [0, 0, 0, 0] if 'cents' is a string`, () => {
    expect(getCoinCombination("")).toEqual([0, 0, 0, 0]);
  });

  it(`Should return [0, 0, 0, 0] if 'cents' is very large`, () => {
    expect(getCoinCombination(Infinity)).toEqual([0, 0, 0, 0]);
  });

  it(`Should return [0, 0, 0, 0] if 'cents' is less than 0`, () => {
    expect(getCoinCombination(-5)).toEqual([0, 0, 0, 0]);
  });

  it(`Should return integer number when 'cents' are non-integer`, () => {
    expect(getCoinCombination(5.5)).toEqual([0, 1, 0, 0]);
  });

  it(`Should return [1, 0, 0, 0] if 'cents' is equal 1`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`Should return [0, 1, 0, 0] if 'cents' is equal 5`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`Should return [0, 0, 1, 0] if 'cents' is equal 10`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`Should return [0, 0, 0, 1] if 'cents' is equal 25`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it(`Should return [0, 0, 1, 0] if 'cents' is equal 10.0`, () => {
    expect(getCoinCombination(10.0)).toEqual([0, 0, 1, 0]);
  });
});
