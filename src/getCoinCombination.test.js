'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`returns one of each coin`, () => {
    expect(getCoinCombination(1 + 5 + 10 + 25)).toEqual([1, 1, 1, 1]);
  });

  it(`returns more than one of each coin if possible`, () => {
    expect(getCoinCombination(4 + 0 + 20 + 50)).toEqual([4, 0, 2, 2]);
  });

  it(`returns zero`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });
});
