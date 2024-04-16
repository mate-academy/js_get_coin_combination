'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return array [1, 0, 0, 0] when the value of cents = 1', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return array [4, 0, 0, 0] when the value of cents = 4', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it('should return array [0, 1, 0, 0] when the value of cents = 5', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should return array [1, 1, 0, 0] when the value of cents = 6', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return array [4, 1, 0, 0] when the value of cents = 9', () => {
    expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
  });

  it('should return array [0, 0, 1, 0] when the value of cents = 10', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('should return array [1, 0, 1, 0] when the value of cents = 11', () => {
    expect(getCoinCombination(11)).toEqual([1, 0, 1, 0]);
  });

  it('should return array [4, 0, 2, 0] when the value of cents = 24', () => {
    expect(getCoinCombination(24)).toEqual([4, 0, 2, 0]);
  });

  it('should return array [0, 0, 0, 1] when the value of cents = 25', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should return array [1, 0, 0, 1] when the value of cents = 26', () => {
    expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
  });

  it('should return array [3, 1, 1, 3] when the value of cents = 93', () => {
    expect(getCoinCombination(93)).toEqual([3, 1, 1, 3]);
  });
});
