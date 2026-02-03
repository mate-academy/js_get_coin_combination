"use strict";

describe("getCoinCombination", () => {
  const { getCoinCombination } = require("./getCoinCombination");

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it("should return [1, 0, 0, 0] for 1 cent", () => {
    const combination = [1, 0, 0, 0];

    expect(getCoinCombination(1)).toEqual(combination);
  });

  it("should return [1, 1, 0, 0] for 6 cents", () => {
    const combination = [1, 1, 0, 0];

    expect(getCoinCombination(6)).toEqual(combination);
  });

  it("should return [2, 1, 1, 0] for 17 cents", () => {
    const combination = [2, 1, 1, 0];

    expect(getCoinCombination(17)).toEqual(combination);
  });

  it("should return [0, 0, 0, 2] for 50 cents", () => {
    const combination = [0, 0, 0, 2];

    expect(getCoinCombination(50)).toEqual(combination);
  });

  it("should return array of NaN for unnumeric cents input", () => {
    const NaNCombination = [NaN, NaN, NaN, NaN];

    expect(getCoinCombination("Non Numeric")).toEqual(NaNCombination);
  });

  it("should return array length of 4 for every input", () => {
    expect(getCoinCombination(15122001)).toHaveLength(4);
  });
});
