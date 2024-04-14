'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`function should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return correct coin combination for 0 cents', () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return correct coin combination for 1 cent`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`should return correct coin combination for 3 cents`, () => {
    expect(getCoinCombination(3))
      .toEqual([3, 0, 0, 0]);
  });

  it(`should return correct coin combination for 5 cents`, () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it(`should return correct coin combination for 6 cents`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`should return correct coin combination for 10 cents`, () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it(`should return correct coin combination for 15 cents`, () => {
    expect(getCoinCombination(15))
      .toEqual([0, 1, 1, 0]);
  });

  it(`should return correct coin combination for 17 cents`, () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  it(`should return correct coin combination for 50 cents`, () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });

  it(`should return correct coin combination for 69 cents`, () => {
    expect(getCoinCombination(69))
      .toEqual([4, 1, 1, 2]);
  });
});
