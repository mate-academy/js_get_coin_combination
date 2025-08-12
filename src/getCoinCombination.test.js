'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('Should return [1, 0, 0, 0] if cents = 1', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('Should return [2, 0, 0, 0] if cents = 2', () => {
    expect(getCoinCombination(2)).toEqual([2, 0, 0, 0]);
  });

  it('Should return [0, 1, 0, 0] if cents = 5', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('Should return [1, 1, 0, 0] if cents = 6', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('Should return [0, 0, 1, 0] if cents = 10', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('Should return [1, 0, 1, 0] if cents = 11', () => {
    expect(getCoinCombination(11)).toEqual([1, 0, 1, 0]);
  });

  it('Should return [2, 1, 1, 0] if cents = 17', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('Should return [0, 0, 0, 1] if cents = 25', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('Should return [1, 0, 0, 1] if cents = 26', () => {
    expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
  });

  it('Should return [0, 1, 0, 1] if cents = 30', () => {
    expect(getCoinCombination(30)).toEqual([0, 1, 0, 1]);
  });

  it('should return [1, 1, 1, 3] if cents = 91', () => {
    expect(getCoinCombination(91)).toEqual([1, 1, 1, 3]);
  });
});
