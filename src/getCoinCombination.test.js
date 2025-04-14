"use strict";

import { getCoinCombination } from "./getCoinCombination.js";

describe("getCoinCombination", () => {
  it("should be declared", () => {
    expect(typeof getCoinCombination).toBe("function");
  });

  it("should return [1, 0, 0, 0] for 1 cent", () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it("should return [1, 1, 0, 0] for 6 cents", () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it("should return [2, 1, 1, 0] for 17 cents", () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it("should return [0, 0, 0, 2] for 50 cents", () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it("should return [0, 0, 0, 4] for 100 cents (1 dollar)", () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
  });

  it("should return [4, 0, 0, 2] for 54 cents", () => {
    expect(getCoinCombination(54)).toEqual([4, 0, 0, 2]);
  });

  it("should return [4, 0, 0, 0] for 4 cents", () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it("should return [4, 1, 0, 0] for 9 cents", () => {
    expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
  });

  it("should return [0, 0, 1, 0] for 10 cents", () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it("should return [0, 0, 0, 0] for 0 cents", () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });
});
