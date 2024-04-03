'use strict';

const { getCoinCombination } = require('./getCoinCombination');

describe('getCoinCombination', () => {
  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });
});

it(`should return [1, 0, 0, 0] for cents equal to 1`, () => {
  expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
});

it(`should return [1, 1, 0, 0] for cents equal to 6`, () => {
  expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
});

it(`should return [2, 1, 1, 0] for cents equal to 17`, () => {
  expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
});

it(`should return [0, 0, 0, 2] for cents equal to 50`, () => {
  expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
});
