'use strict';

describe(`Function 'getCoinCombination':`, () => {
  const getCoinCombination = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getCoinCombination()).toBeInstanceOf(Array);
  });

  it(`should return an array: [0, 0, 0, 0] if cents = 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return an array: [1, 0, 0, 0] if cents = 1`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return an array: [0, 1, 0, 0] if cents = 5`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`should return an array: [1, 1, 0, 0] if cents = 6`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should return an array: [0, 0, 1, 0] if cents = 10`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`should return an array: [1, 0, 1, 0] if cents = 11`, () => {
    expect(getCoinCombination(11)).toEqual([1, 0, 1, 0]);
  });

  it(`should return an array: [1, 1, 1, 0] if cents = 16`, () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  it(`should return an array: [0, 0, 0, 1] if cents = 25`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it(`should return an array: [1, 0, 0, 1] if cents = 26`, () => {
    expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
  });

  it(`should return an array: [0, 1, 0, 1] if cents = 30`, () => {
    expect(getCoinCombination(30)).toEqual([0, 1, 0, 1]);
  });

  it(`should return an array: [0, 0, 1, 1] if cents = 35`, () => {
    expect(getCoinCombination(35)).toEqual([0, 0, 1, 1]);
  });

  it(`should return an array: [1, 1, 1, 1] if cents = 41`, () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });
});
