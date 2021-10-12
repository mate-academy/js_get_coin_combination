'use strict';

describe(`Function 'getCoinCombination':`, () => {
  const getCoinCombination = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getCoinCombination(1))
      .toBeInstanceOf(Array);
  });

  it(`should return [0, 0, 0, 0] if amount = 0`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  // write more tests here
  it(`should return [3, 0, 0, 0] if amount = 3`, () => {
    expect(getCoinCombination(3))
      .toEqual([3, 0, 0, 0]);
  });

  it(`should return [0, 1, 0, 0] if amount = 5`, () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it(`should return [0, 0, 1, 0] if amount = 10`, () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it(`should return [2, 0, 1, 0] if amount = 12`, () => {
    expect(getCoinCombination(12))
      .toEqual([2, 0, 1, 0]);
  });

  it(`should return [0, 1, 1, 0] if amount = 15`, () => {
    expect(getCoinCombination(15))
      .toEqual([0, 1, 1, 0]);
  });

  it(`should return [0, 0, 2, 0] if amount = 20`, () => {
    expect(getCoinCombination(20))
      .toEqual([0, 0, 2, 0]);
  });

  it(`should return [0, 0, 0, 1] if amount = 25`, () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  it(`should return [2, 0, 0, 1] if amount = 27`, () => {
    expect(getCoinCombination(27))
      .toEqual([2, 0, 0, 1]);
  });

  it(`should return [0, 1, 0, 1] if amount = 30`, () => {
    expect(getCoinCombination(30))
      .toEqual([0, 1, 0, 1]);
  });

  it(`should return [0, 1, 0, 2] if amount = 55`, () => {
    expect(getCoinCombination(55))
      .toEqual([0, 1, 0, 2]);
  });

  it(`should return [4, 1, 1, 2] if amount = 69`, () => {
    expect(getCoinCombination(69))
      .toEqual([4, 1, 1, 2]);
  });
});
