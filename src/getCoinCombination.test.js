'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`returns [1, 0, 0, 0] for a total of 1 coin`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`returns [1, 1, 0, 0]  for a total of 6 coins`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`returns [2, 1, 1, 0] for a total of 17 coins`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`returns [0, 0, 0, 2]  for a total of 50 coins`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
