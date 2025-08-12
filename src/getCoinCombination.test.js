/* eslint-disable quotes */
"use strict";

describe("getCoinCombination", () => {
  const { getCoinCombination } = require("./getCoinCombination");

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getCoinCombination(0)).toBeInstanceOf(Array);
  });

  it("should return [0, 0, 0, 0] for 0 cents", () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it("should return [1, 0, 0, 0] for 1 cent", () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  it("should return [0, 1, 0, 0] for 5 cents", () => {
    const result = getCoinCombination(5);

    expect(result).toEqual([0, 1, 0, 0]);
  });

  it("should return [0, 0, 1, 0] for 10 cents", () => {
    const result = getCoinCombination(10);

    expect(result).toEqual([0, 0, 1, 0]);
  });

  it("should return [0, 0, 0, 1] for 25 cents", () => {
    const result = getCoinCombination(25);

    expect(result).toEqual([0, 0, 0, 1]);
  });

  it("should return [1, 1, 1, 1] for 41 cents", () => {
    const result = getCoinCombination(41);

    expect(result).toEqual([1, 1, 1, 1]);
  });

  it("should return [3, 0, 0, 0] for 3 cents", () => {
    const result = getCoinCombination(3);

    expect(result).toEqual([3, 0, 0, 0]);
  });

  it("should handle non-numeric input gracefully", () => {
    expect(() => getCoinCombination("a")).toThrow();
    expect(() => getCoinCombination(null)).toThrow();
    expect(() => getCoinCombination(-5)).toThrow();
  });
});
