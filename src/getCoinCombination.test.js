'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return an array', () => {
    expect(getCoinCombination()).toBeInstanceOf(Array);
  });
  expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);

  expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);

  expect(getCoinCombination(2)).toEqual([2, 0, 0, 0]);

  expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);

  expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);

  expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);

  expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);

  expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
});
