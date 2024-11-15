'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array with 4 int`, () => {
    const result = getCoinCombination(25);

    expect(Array.isArray(result)).toBe(true);

    for (const change of result) {
      expect(Number.isInteger(change)).toBe(true);
    }
  });

  it(`returns 0 with 0 cents`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`returns 1 penny with 1 cent`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`returns 1 nickel with 5 cents`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`returns 1 dime with 10 cents`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`returns 1 quarter with 25 cents`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it(`quarter, dime and penny with 36 cents`, () => {
    expect(getCoinCombination(36)).toEqual([1, 0, 1, 1]);
  });

  it(`2 quarters, dime and a nickel with 65 cents`, () => {
    expect(getCoinCombination(65)
    ).toEqual([0, 1, 1, 2]);
  });

  // TEST FOR NaN
  /*
  it(`cents === NaN`, () => {
    expect(getCoinCombination(NaN)
  ).toEqual([0,0,0,0]);
  });
  */
});
