'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return [0, 0, 0, 0] if the input is 0`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`should return an array`, () => {
    expect(getCoinCombination())
      .toBeInstanceOf(Array);
  });

  it(`should return [1, 0, 0, 0] if the input is 1`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`should return [0, 1, 0, 0] if the input is 5`, () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it(`should return [0, 0, 1, 0] if the input is 10`, () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it(`should return [0, 0, 0, 1] if the input is 25`, () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  it(`should return [1, 1, 1, 1] if the input is 41`, () => {
    expect(getCoinCombination(41))
      .toEqual([1, 1, 1, 1]);
  });

  it(`should return [4, 0, 2, 3] if the input is 99`, () => {
    expect(getCoinCombination(99))
      .toEqual([4, 0, 2, 3]);
  });

  it(`should return [1, 1, 1, 5] if the input is 141`, () => {
    expect(getCoinCombination(141))
      .toEqual([1, 1, 1, 5]);
  });

  it(`should return [2, 0, 0, 8] if the input is 202`, () => {
    expect(getCoinCombination(202))
      .toEqual([2, 0, 0, 8]);
  });

  it(`should return [4, 1, 0, 40] if the input is 1009`, () => {
    expect(getCoinCombination(1009))
      .toEqual([4, 1, 0, 40]);
  });
});
