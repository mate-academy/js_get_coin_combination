'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it("should return array with all coins when amount is 1", () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it("should return correct combination for amount 6", () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it("should return correct combination for amount 17", () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it("should return correct combination for amount 50", () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
