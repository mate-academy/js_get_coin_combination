'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });
   it(`should return [0, 0, 0, 0] for 0 cents`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });
   it(`should return [1, 0, 0, 0] for 1 cents`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });
   it(`should return [1, 1, 0, 0] for 6 cents`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });
   it(`should return [1, 1, 1, 0] for 16 cents`, () => {
    expect(getCoinCombination(16))
      .toEqual([1, 1, 1, 0]);
  });
  it(`should return [1, 1, 1, 1] for 41 cents`, () => {
    expect(getCoinCombination(41))
      .toEqual([1, 1, 1, 1]);
  });
  it(`should return [0, 0, 0, 2] for 50 cents`, () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });
  it(`should return [0, 2, 0, 0] for 10 cents`, () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });
});
