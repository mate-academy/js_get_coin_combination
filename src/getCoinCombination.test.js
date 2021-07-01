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

  it(`should return [0, 0, 0, 0] if amount = 0`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it(`should return [4, 0, 0, 0] if amount = 0`, () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it(`should return [0, 1, 0, 0] if amount = 5`, () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it(`should return [1, 1, 0, 0] if amount = 6`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`should return [4, 1, 0, 0] if amount = 9`, () => {
    expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
  });

  it(`should return [0, 0, 1, 0] if amount = 10`, () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it(`should return [1, 0, 1, 0] if amount = 11`, () => {
    expect(getCoinCombination(11)).toEqual([1, 0, 1, 0]);
  });

  it(`should return [4, 0, 1, 0] if amount = 14`, () => {
    expect(getCoinCombination(14)).toEqual([4, 0, 1, 0]);
  });

  it(`should return [0, 1, 1, 0] if amount = 15`, () => {
    expect(getCoinCombination(15)).toEqual([0, 1, 1, 0]);
  });

  it(`should return [1, 1, 1, 0] if amount = 16`, () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  it(`should return [4, 0, 2, 0] if amount = 24`, () => {
    expect(getCoinCombination(24)).toEqual([4, 0, 2, 0]);
  });

  it(`should return [0, 0, 0, 1] if amount = 25`, () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it(`should return [1, 0, 0, 1] if amount = 26`, () => {
    expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
  });

  it(`should return [1, 1, 0, 1] if amount = 31`, () => {
    expect(getCoinCombination(31)).toEqual([1, 1, 0, 1]);
  });

  it(`should return [1, 0, 1, 1] if amount = 36`, () => {
    expect(getCoinCombination(36)).toEqual([1, 0, 1, 1]);
  });

  it(`should return [1, 1, 1, 1] if amount = 41`, () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });
});
