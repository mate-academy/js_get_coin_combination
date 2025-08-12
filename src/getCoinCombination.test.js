'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array `, () => {
    expect(getCoinCombination(1))
      .toBeInstanceOf(Array);
  });

  it(`should return [1, 0, 0, 0] when input '1'`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`should return [4, 0, 0, 0] when input '4'`, () => {
    expect(getCoinCombination(4))
      .toEqual([4, 0, 0, 0]);
  });

  it(`should return [0, 1, 0, 0] when input '5'`, () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it(`should return [1, 1, 0, 0] when input '6'`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`should return [0, 0, 1, 0] when input '10'`, () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it(`should return [1, 0, 1, 0] when input '11'`, () => {
    expect(getCoinCombination(11))
      .toEqual([1, 0, 1, 0]);
  });

  it(`should return [0, 1, 1, 0] when input '15'`, () => {
    expect(getCoinCombination(15))
      .toEqual([0, 1, 1, 0]);
  });

  it(`should return [0, 0, 0, 1] when input '25'`, () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  it(`should return [1, 0, 0, 1] when input '26'`, () => {
    expect(getCoinCombination(26))
      .toEqual([1, 0, 0, 1]);
  });

  it(`should return [0, 1, 0, 1] when input '30'`, () => {
    expect(getCoinCombination(30))
      .toEqual([0, 1, 0, 1]);
  });

  it(`should return [0, 0, 1, 1] when input '35'`, () => {
    expect(getCoinCombination(35))
      .toEqual([0, 0, 1, 1]);
  });

  it(`should return [1, 1, 1, 1] when input '41'`, () => {
    expect(getCoinCombination(41))
      .toEqual([1, 1, 1, 1]);
  });

  it(`should return [0, 0, 0, 2] when input '50'`, () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });

  it(`should return [1, 1, 1, 2] when input '66'`, () => {
    expect(getCoinCombination(66))
      .toEqual([1, 1, 1, 2]);
  });

  it(`should return [0, 0, 0, 0] when input '0'`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });
});
