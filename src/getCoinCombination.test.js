'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return [0, 0, 0, 0] for 0 cents`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return [1, 0, 0, 0] for 1 cent`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return [1, 1, 0, 0] for 6 cent`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should return [1, 1, 1, 0] for 16 cent`, () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  it(`should return [4, 1, 1, 0] for 19 cent`, () => {
    expect(getCoinCombination(19)).toEqual([4, 1, 1, 0]);
  });

  it(`should return [0, 0, 1, 1] for 35 cent`, () => {
    expect(getCoinCombination(35)).toEqual([0, 0, 1, 1]);
  });

  it(`should return [0, 1, 1, 1] for 40 cent`, () => {
    expect(getCoinCombination(40)).toEqual([0, 1, 1, 1]);
  });

  it(`should return [1, 1, 1, 1] for 41 cent`, () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it(`should return [0, 0, 0, 2] for 50 cent`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it(`should return [0, 0, 0, 4] for 100 cent`, () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
  });

  it(`should return [3, 0, 2, 4] for 123 cent`, () => {
    expect(getCoinCombination(123)).toEqual([3, 0, 2, 4]);
  });

  it("should throw an error for negative cents", () => {
    expect(() => getCoinCombination(-1)).toThrow();
  });

  it("should throw an error for NaN", () => {
    expect(() => getCoinCombination(g)).toThrow();
  });
});
