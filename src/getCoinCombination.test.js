'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getCoinCombination(1)).toBeInstanceOf(Array);
  });

  it(`should return [0, 0, 0, 0] for cents = 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return [4, 0, 0, 0] for cents = 4`, () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it(`should return [0, 1, 0, 0] for cents = 5`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`should return [4, 1, 0, 0] for cents = 9`, () => {
    expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
  });

  it(`should return [0, 0, 1, 0] for cents = 10`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`should return [4, 0, 2, 0] for cents = 24`, () => {
    expect(getCoinCombination(24)).toEqual([4, 0, 2, 0]);
  });

  it(`should return [0, 0, 0, 1] for cents = 25`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it(`should return [4, 0, 2, 1] for cents = 49`, () => {
    expect(getCoinCombination(49)).toEqual([4, 0, 2, 1]);
  });

  it(`should return [0, 0, 0, 2] for cents = 50`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
