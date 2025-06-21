'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return correct coins for 42`, () => {
    expect(getCoinCombination(42)).toEqual([2, 1, 1, 1]);
  });

  it(`should return correct coins for boudary values fo 1`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return correct coins for boudary values fo 5`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`should return correct coins for boudary values of 6`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should return correct coins for boudary values of 10`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`should return correct coins for boudary values of 15`, () => {
    expect(getCoinCombination(15)).toEqual([0, 1, 1, 0]);
  });

  it(`should return correct coins for boudary values of 25`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it(`should return correct coins for boudary values of 35`, () => {
    expect(getCoinCombination(35)).toEqual([0, 0, 1, 1]);
  });

  it(`should return correct coins for large amount: 10000016`, () => {
    expect(getCoinCombination(10000016)).toEqual([1, 1, 1, 400000]);
  });

  it(`should return empty massive when cents is null`, () => {
    expect(getCoinCombination('')).toEqual([0, 0, 0, 0]);
    });
});
