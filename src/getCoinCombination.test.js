"use strict";

describe("getCoinCombination", () => {
  const { getCoinCombination } = require("./getCoinCombination");

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it("should be 0 penny for 0 cent", () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it("should be 1 penny for 1 cent", () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it("should be 2 pennys for 2", () => {
    expect(getCoinCombination(2)).toEqual([2, 0, 0, 0]);
  });

  it("should be 4 pennys for 4", () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it("should be 1 nickel for 5", () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it("should be 1 nickel and 1 penny for 6", () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it("should be 1 nickel and 3 penny for 8", () => {
    expect(getCoinCombination(8)).toEqual([3, 1, 0, 0]);
  });

  it("should be 1 nickel and 4 penny for 9", () => {
    expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
  });

  it("should be 1 dime for 10", () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it("should be 1 dime and 1 penny for 11", () => {
    expect(getCoinCombination(11)).toEqual([1, 0, 1, 0]);
  });

  it("should be 1 dime, 1 nickel, 1 penny for 17", () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it("should be 2 dimes, 4 pennys for 24", () => {
    expect(getCoinCombination(24)).toEqual([4, 0, 2, 0]);
  });

  it("should be 1 quarter for 25", () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it("should be 1 quarter, 1 penny for 26", () => {
    expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
  });

  it("should be 2 quarters for 50", () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
