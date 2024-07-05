'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`returns correct combination for 1 cent`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`returns correct combination for 6 cent`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`returns correct combination for 17 cent`, () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  it(`returns correct combination for 50 cent`, () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });

  it(`returns correct combination for 0 cent`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`returns correct combination for large numbers`, () => {
    expect(getCoinCombination(120))
      .toEqual([0, 0, 2, 4]);

    expect(getCoinCombination(188))
      .toEqual([3, 0, 1, 7]);

    expect(getCoinCombination(88))
      .toEqual([3, 0, 1, 3]);
  });
});
