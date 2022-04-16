'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getCoinCombination(1))
      .toBeInstanceOf(Array);
  });

  it(`should return [0, 0, 0, 0] if value = 0`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return 1 penny, 1 nickel if value = 6`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`should return 2 penny, 1 nickel, 1 dime if value = 17`, () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  it(`should return 2 quartes if value = 50`, () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });

  it(`should return 4 penny, 1dimes, 4938271 quartes
  if value = 123456789`, () => {
    expect(getCoinCombination(123456789))
      .toEqual([4, 0, 1, 4938271]);
  });
});
