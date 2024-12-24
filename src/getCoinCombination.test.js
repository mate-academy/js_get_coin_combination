"use strict";

describe("getCoinCombination", () => {
  const { getCoinCombination } = require("./getCoinCombination");

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should be '[1,0,0,0]' for 'cents' = 1`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should be '[0,1,0,0]' for 'cents' = 5`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`should be '[0,0,1,0]' for 'cents' = 10`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`should be '[0,0,0,2]' for 'cents' = 50`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it(`should be '[1,1,1,2]' for 'cents' = 66`, () => {
    expect(getCoinCombination(66)).toEqual([1, 1, 1, 2]);
  });
});
