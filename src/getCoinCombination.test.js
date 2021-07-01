'use strict';

describe(`Function 'getCoinCombination':`, () => {
  const getCoinCombination = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getCoinCombination([]).constructor.name).toEqual('Array');
  });

  // it(`should return [0, 0, 0, 0] if amount = 0`, (cents) => {
  //   expect(getCoinCombination()).toEqual([0]);
  // });

  it(`should return [0, 0, 0, 4] if amount = 100`, () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
  });

  it(`should return [3, 0, 2, 4] if amount = 123`, () => {
    expect(getCoinCombination(123)).toEqual([3, 0, 2, 4]);
  });

  it(`should return [1, 1, 1, 1] if amount = 41`, () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it(`should return [2, 0, 2, 15] if amount = 397`, () => {
    expect(getCoinCombination(397)).toEqual([2, 0, 2, 15]);
  });

  it(`should return [2, 0, 0, 0] if amount = 2`, () => {
    expect(getCoinCombination(2)).toEqual([2, 0, 0, 0]);
  });

  it(`should return [1, 1, 0, 2] if amount = 56`, () => {
    expect(getCoinCombination(56)).toEqual([1, 1, 0, 2]);
  });

  it(`should return [2, 0, 1, 3] if amount = 87`, () => {
    expect(getCoinCombination(87)).toEqual([2, 0, 1, 3]);
  });

  it(`should return [3, 0, 2, 7] if amount = 198`, () => {
    expect(getCoinCombination(198)).toEqual([3, 0, 2, 7]);
  });

  it(`should return [0, 0, 0, 0] if amount = 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });
});
