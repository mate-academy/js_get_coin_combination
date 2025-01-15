"use strict";

describe("getCoinCombination", () => {
  const { getCoinCombination } = require("./getCoinCombination");

  it("should be declared", () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it("should return array", () => {
    const result = getCoinCombination();

    expect(result).toBeInstanceOf(Array);
  });

  it("should returns correct combination for 1 cent: 1 penny", () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  it(
    "should returns correct combination" + " for 6 cents: 1 penny + 1 nickel",
    () => {
      const result = getCoinCombination(6);

      expect(result).toEqual([1, 1, 0, 0]);
    }
  );

  it(
    "should returns correct combination" +
      " for 17 cents: 2 pennies + 1 nickel + 1 dime",
    () => {
      const result = getCoinCombination(17);

      expect(result).toEqual([2, 1, 1, 0]);
    }
  );

  it("should returns correct combination for 50 cent: 2 quarters", () => {
    const result = getCoinCombination(50);

    expect(result).toEqual([0, 0, 0, 2]);
  });
});
