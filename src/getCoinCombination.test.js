"use strict";

describe("getCoinCombination", () => {
  const { getCoinCombination } = require("./getCoinCombination");

  it(`should be a declared function`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it("should return an array", () => {
    expect(getCoinCombination()).toBeInstanceOf(Array);
  });

  it("should return an array of length 4", () => {
    expect(getCoinCombination().length).toEqual(4);
  });

  it("should return [1, 0, 0 ,0] for input value 1 (1 penny)", () => {
    const result = getCoinCombination(1);
    const expectedResult = [1, 0, 0, 0];

    expect(result).toEqual(expectedResult);
  });

  it("should return [1, 1, 0 ,0] for input value 6 (1 penny, 1 nickel)", () => {
    const result = getCoinCombination(6);
    const expectedResult = [1, 1, 0, 0];

    expect(result).toEqual(expectedResult);
  });

  it(
    "should return [2, 0, 0, 1] for input" + "value 27 (1 quarter, 2 penny)",
    () => {
      const result = getCoinCombination(27);
      const expectedResult = [2, 0, 0, 1];

      expect(result).toEqual(expectedResult);
    }
  );

  it(
    "should return [2, 0, 0, 2] for input" + "value 52 (2 pennies, 2 quarter)",
    () => {
      const result = getCoinCombination(52);
      const expectedResult = [2, 0, 0, 2];

      expect(result).toEqual(expectedResult);
    }
  );

  it("should return [0, 1, 0, 0] for input value 5 (1 nickel)", () => {
    const result = getCoinCombination(5);
    const expectedResult = [0, 1, 0, 0];

    expect(result).toEqual(expectedResult);
  });

  it("should return [0, 1, 0, 0] for input value 25 (1 quarter)", () => {
    const result = getCoinCombination(25);
    const expectedResult = [0, 0, 0, 1];

    expect(result).toEqual(expectedResult);
  });
});
