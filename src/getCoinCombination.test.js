'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return correct combination for 1 cent`, () => {
    const result = getCoinCombination(1);

    expect(result)
      .toEqual([1, 0, 0, 0]);
  });

  it(`should return correct combination for 6 cent`, () => {
    const result = getCoinCombination(6);

    expect(result)
      .toEqual([1, 1, 0, 0]);
  });

  it(`should return correct combination for 17 cent`, () => {
    const result = getCoinCombination(17);

    expect(result)
      .toEqual([2, 1, 1, 0]);
  });

  it(`should return correct combination for 50 cent`, () => {
    const result = getCoinCombination(50);

    expect(result)
      .toEqual([0, 0, 0, 2]);
  });

  it(`should return correct combination for 0 cent`, () => {
    const result = getCoinCombination(0);

    expect(result)
      .toEqual([0, 0, 0, 0]);
  });
});
