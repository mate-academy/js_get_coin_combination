'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return an array [0, 0, 0, 0] for argument with 0 value', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return an array [1, 0, 0, 0] for argument with 1 value', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return an array [2, 0, 0, 0] for argument with 2 value', () => {
    expect(getCoinCombination(2)).toEqual([2, 0, 0, 0]);
  });

  it('should return an array [4, 0, 0, 0] for argument with 4 value', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it('should return an array [0, 1, 0, 0] for argument with 5 value', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should return an array [1, 1, 0, 0] for argument with 6 value', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return an array [4, 1, 0, 0] for argument with 9 value', () => {
    expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
  });

  it('should return an array [0, 0, 1, 0] for argument with 10 value', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('should return an array [1, 0, 1, 0] for argument with 11 value', () => {
    expect(getCoinCombination(11)).toEqual([1, 0, 1, 0]);
  });

  it('should return an array [4, 0, 2, 0] for argument with 24 value', () => {
    expect(getCoinCombination(24)).toEqual([4, 0, 2, 0]);
  });

  it('should return an array [0, 0, 0, 1] for argument with 25 value', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should return an array [1, 0, 0, 1] for argument with 26 value', () => {
    expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
  });
});
