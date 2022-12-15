'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return 0 for 0 coins`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return 2 penny`, () => {
    expect(getCoinCombination(2))
      .toEqual([2, 0, 0, 0]);
  });

  it(`should return 1 nikle and 1 penny`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`should return 1 dime, 1 nikles and  4 penny`, () => {
    expect(getCoinCombination(19))
      .toEqual([4, 1, 1, 0]);
  });

  it(`should return 1 nickle 1 quarter`, () => {
    expect(getCoinCombination(30))
      .toEqual([0, 1, 0, 1]);
  });

  it(`should throw an error if number is negative`, () => {
    expect(() => {
      getCoinCombination(-5);
    })
      .toThrow(`Integer can't be negative`);
  });
});
