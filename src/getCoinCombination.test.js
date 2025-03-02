'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`getCoinCombination(0) should return [0, 0, 0, 0]`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it(`getCoinCombination(1) should return [1, 0, 0, 0]`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`getCoinCombination(2) should return [2, 0, 0, 0]`, () => {
    expect(getCoinCombination(2))
      .toEqual([2, 0, 0, 0]);
  });

  it(`getCoinCombination(4) should return [4, 0, 0, 0]`, () => {
    expect(getCoinCombination(4))
      .toEqual([4, 0, 0, 0]);
  });

  it(`getCoinCombination(5) should return [0, 1, 0, 0]`, () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it(`getCoinCombination(6) should return [1, 1, 0, 0]`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`getCoinCombination(9) should return [4, 1, 0, 0]`, () => {
    expect(getCoinCombination(9))
      .toEqual([4, 1, 0, 0]);
  });

  it(`getCoinCombination(10) should return [0, 0, 1, 0]`, () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it(`getCoinCombination(11) should return [1, 0, 1, 0]`, () => {
    expect(getCoinCombination(11))
      .toEqual([1, 0, 1, 0]);
  });

  it(`getCoinCombination(14) should return [4, 0, 1, 0]`, () => {
    expect(getCoinCombination(14))
      .toEqual([4, 0, 1, 0]);
  });

  it(`getCoinCombination(15) should return [0, 1, 1, 0]`, () => {
    expect(getCoinCombination(15))
      .toEqual([0, 1, 1, 0]);
  });

  it(`getCoinCombination(16) should return [1, 1, 1, 0]`, () => {
    expect(getCoinCombination(16))
      .toEqual([1, 1, 1, 0]);
  });

  it(`getCoinCombination(17) should return [2, 1, 1, 0]`, () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  it(`getCoinCombination(24) should return [4, 0, 2, 0]`, () => {
    expect(getCoinCombination(24))
      .toEqual([4, 0, 2, 0]);
  });

  it(`getCoinCombination(25) should return [0, 0, 0, 1]`, () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  it(`getCoinCombination(26) should return [1, 0, 0, 1]`, () => {
    expect(getCoinCombination(26))
      .toEqual([1, 0, 0, 1]);
  });

  it(`getCoinCombination(50) should return [0, 0, 0, 2]`, () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });

  it(`'getCoinCombination' should return an array`, () => {
    expect(getCoinCombination(50))
      .toBeInstanceOf(Array);
  });
});
