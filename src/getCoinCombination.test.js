'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return [0, 0, 0, 0] for 0`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return [1, 0, 0, 0] for 1 penny = 1 cent`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it('should return [3, 0, 0, 0] for 3 cents', () => {
    expect(getCoinCombination(3))
      .toEqual([3, 0, 0, 0]);
  });

  it(`should return [0, 1, 0, 0] for 5 cents`, () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it('should return [1, 1, 0, 0] for 6 cents', () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`should return [0, 0, 1, 0] for 10 cents`, () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it('should return [2, 1, 1, 0] for 17 cents', () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  it(`should return [0, 0, 0, 1] for 25 cents`, () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });
  ;

  it(`should return [3, 1, 1, 1] for 43 cents`, () => {
    expect(getCoinCombination(43))
      .toEqual([3, 1, 1, 1]);
  });

  it(`should return [0, 0, 0, 2] for 50 cents`, () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });
});
