'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return correct values if cents === 0 ', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return correct values if cents < 5', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it('should return correct values if cents === 5', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should return correct values if 5 <= cents < 10', () => {
    expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
  });

  it('should return correct values if cents === 10', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('should return correct values if 10 <= cents < 25', () => {
    expect(getCoinCombination(19)).toEqual([4, 1, 1, 0]);
  });

  it('should return correct values if cents === 25', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should return correct values if 75 <= cents', () => {
    expect(getCoinCombination(93)).toEqual([3, 1, 1, 3]);
  });
});
