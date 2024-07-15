"use strict";

describe("getCoinCombination", () => {
  const { getCoinCombination } = require("./getCoinCombination");

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getCoinCombination(0)).toBeInstanceOf(Array);
  });

  it(`should return [0, 0, 0, 0] for 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return [1, 0, 0, 0] for 1`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });
  it(`should return [0, 1, 0, 0] for 5`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });
  it(`should return [0, 0, 1, 0] for 10`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });
  it(`should return [0, 0, 0, 1] for 25`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });
  it(`should return [1, 1, 1, 1] for 41`, () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });
  it(`should return [3, 1, 0, 1] for 68`, () => {
    expect(getCoinCombination(68)).toEqual([3, 1, 1, 2]);
  });
  it("should return [0, 0, 0, 0] for -1", () => {
    expect(getCoinCombination(-1)).toEqual([0, 0, 0, 0]);
  });
  it("handles non-numeric input by returning an array indicating invalid input", () => {
    const result = getCoinCombination("string");
    expect(result).toBeInstanceOf(Array);
    expect(result.every((item) => isNaN(item))).toBeTruthy();
  });

  it("should return [0, 0, 0, 0] for undefined", () => {
    expect(getCoinCombination()).toEqual([0, 0, 0, 0]);
  });

  it("should return link to 50 Cent video for 50", () => {
    const result = getCoinCombination(50);
    expect(result).toBeInstanceOf(Object);
    expect(result.link).toBe("https://www.youtube.com/watch?v=5qm8PH4xAss");
  });
});
