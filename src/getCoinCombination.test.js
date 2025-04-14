'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  test(`should return 0, 0, 0, 0 for 0 coins`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  test(`should return correct coin combination`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test(`should return correct coin combination`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  test(`should return correct coin combination`, () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  test(`should return correct coin combination`, () => {
    expect(getCoinCombination(49)).toEqual([4, 0, 2, 1]);
  });

  test(`should return correct coin combination`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
