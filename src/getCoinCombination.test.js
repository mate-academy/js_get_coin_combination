"use strict";

describe("getCoinCombination", () => {
  const { getCoinCombination } = require("./getCoinCombination");
  describe("getCoinCombination", () => {
    it("should be declared", () => {
      expect(getCoinCombination).toBeInstanceOf(Function);
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

    it("should return [0, 0, 0, 0] for 0 cents", () => {
      expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
    });

    it("should handle large amounts (e.g., 1234 cents)", () => {
      expect(getCoinCombination(1234)).toEqual([4, 1, 0, 48]);
    });

    it("should return [0, 0, 0, 0] for negative inputs", () => {
      expect(getCoinCombination(-10)).toEqual([0, 0, 0, 0]);
    });

    it("should return [0, 0, 0, 0] for non-integer inputs", () => {
      expect(getCoinCombination(10.5)).toEqual([0, 0, 0, 0]);
    });
  });
});
