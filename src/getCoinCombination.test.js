"use strict";

const { getCoinCombination } = require("./getCoinCombination");

function assertSum(cents, [p, n, d, q]) {
  const isValid = p + 5 * n + 10 * d + 25 * q === cents;

  return isValid;
}

describe("getCoinCombination", () => {
  it("should be declared", () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  describe("examples", () => {
    it("should return [1,0,0,0] for 1", () => {
      expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
      expect(assertSum(1, [1, 0, 0, 0])).toBe(true);
    });

    it("should return [1,1,0,0] for 6", () => {
      expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
      expect(assertSum(6, [1, 1, 0, 0])).toBe(true);
    });

    it("should return [2,1,1,0] for 17", () => {
      expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
      expect(assertSum(17, [2, 1, 1, 0])).toBe(true);
    });

    it("should return [4,0,2,0] for 24", () => {
      expect(getCoinCombination(24)).toEqual([4, 0, 2, 0]);
      expect(assertSum(24, [4, 0, 2, 0])).toBe(true);
    });

    it("should return [1,1,1,1] for 41", () => {
      expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
      expect(assertSum(41, [1, 1, 1, 1])).toBe(true);
    });

    it("should return [4,0,2,3] for 99", () => {
      expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
      expect(assertSum(99, [4, 0, 2, 3])).toBe(true);
    });

    it("should return [0,0,0,2] for 50", () => {
      expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
      expect(assertSum(50, [0, 0, 0, 2])).toBe(true);
    });

    it("should return [0, 0, 0, 0] for 0", () => {
      expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
    });
  });

  describe("multiples", () => {
    it("should return [0,1,0,0] for 5", () => {
      expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
      expect(assertSum(5, [0, 1, 0, 0])).toBe(true);
    });

    it("should return [0,0,1,0] for 10", () => {
      expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
      expect(assertSum(10, [0, 0, 1, 0])).toBe(true);
    });

    it("should return [0,0,0,1] for 25", () => {
      expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
      expect(assertSum(25, [0, 0, 0, 1])).toBe(true);
    });

    it("should return [0,0,0,2] for 50", () => {
      expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
      expect(assertSum(50, [0, 0, 0, 2])).toBe(true);
    });

    it("should return [0,0,0,3] for 75", () => {
      expect(getCoinCombination(75)).toEqual([0, 0, 0, 3]);
      expect(assertSum(75, [0, 0, 0, 3])).toBe(true);
    });

    it("should return [0,0,0,4] for 100", () => {
      expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
      expect(assertSum(100, [0, 0, 0, 4])).toBe(true);
    });
  });

  describe("mixed cases", () => {
    it("should return [0,1,0,1] for 30", () => {
      expect(getCoinCombination(30)).toEqual([0, 1, 0, 1]);
      expect(assertSum(30, [0, 1, 0, 1])).toBe(true);
    });

    it("should return [0,1,1,1] for 40", () => {
      expect(getCoinCombination(40)).toEqual([0, 1, 1, 1]);
      expect(assertSum(40, [0, 1, 1, 1])).toBe(true);
    });

    it("should return [1,1,1,1] for 41", () => {
      expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
      expect(assertSum(41, [1, 1, 1, 1])).toBe(true);
    });

    it("should return [4,0,2,3] for 99", () => {
      expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
      expect(assertSum(99, [4, 0, 2, 3])).toBe(true);
    });
  });

  describe("validation", () => {
    it("should return an array of four numbers", () => {
      expect(getCoinCombination(99)).toHaveLength(4);
    });

    it("should return only numbers", () => {
      const result = getCoinCombination(99);

      expect(result.every(Number.isInteger)).toBe(true);
    });

    it("should sum up to the original cents", () => {
      const cents = 99;
      const result = getCoinCombination(cents);

      expect(assertSum(cents, result)).toBe(true);
    });
  });
});
