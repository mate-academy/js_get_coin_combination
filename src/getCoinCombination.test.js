'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(Array.isArray(getCoinCombination(5)))
      .toBe(true);
  });

  it(`should return [0, 0, 0, 0] for 0 cents`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return correct combination for 1 cent`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`should return correct combination for 5 cent`, () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it(`should return correct combination for 10 cent`, () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it(`should return correct combination for 25 cent`, () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  it(`should return correct combination for 41 cent`, () => {
    expect(getCoinCombination(41))
      .toEqual([1, 1, 1, 1]);
  });

  it('should return correct combination for 87 cents', () => {
    expect(getCoinCombination(87)).toEqual([2, 0, 1, 3]);
  });

  it('should return correct combination for 99 cents', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });
});
