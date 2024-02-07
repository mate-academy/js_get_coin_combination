'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should properly work with zero value`, () => {
    expect(getCoinCombination(0))
      .toStrictEqual([0, 0, 0, 0]);
  });

  it(`should properly count penny value`, () => {
    expect(getCoinCombination(4))
      .toStrictEqual([4, 0, 0, 0]);
  });

  it(`should properly count nickel value`, () => {
    expect(getCoinCombination(5))
      .toStrictEqual([0, 1, 0, 0]);
  });

  it(`should properly count dime value`, () => {
    expect(getCoinCombination(10))
      .toStrictEqual([0, 0, 1, 0]);
  });

  it(`should properly count quarter value`, () => {
    expect(getCoinCombination(25))
      .toStrictEqual([0, 0, 0, 1]);
  });

  it(`should properly use all coins together`, () => {
    expect(getCoinCombination(67))
      .toStrictEqual([2, 1, 1, 2]);
  });
});
