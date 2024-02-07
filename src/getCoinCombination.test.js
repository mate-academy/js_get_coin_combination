'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`Sould return [1, 0, 0, 0] if input is 1 cent`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`Sould return [1, 1, 0, 0] if input is 6 cents`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`Sould return [2, 1, 1, 0] if input is 17 cents`, () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  it(`Sould return [0, 0, 0, 2] if input is 50 cents`, () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });
});
