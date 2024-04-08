'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('should return an array of length 4 for 1 cent', () => {
    const result = getCoinCombination(1);
    expect(result).toHaveLength(4);
  });

  it("should return '1' pennie when '1' is entered", () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it("should return '1' pennie and '1' nickel when '6' is entered", () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it("should return '2' pennies, '1' nickel, and '1' dime when '17' is entered", () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it("should return '2' quarters when '50' is entered", () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
