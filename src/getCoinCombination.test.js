'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return [1, 0, 0, 0] when 1 cent is entered', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return [0, 1, 0, 0] when 5 cents are entered', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should return [0, 0, 1, 0] when 10 cents are entered', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('should return [0, 0, 0, 1] when 25 cents are entered', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should return [0, 1, 1, 0] when 15 cents are entered', () => {
    expect(getCoinCombination(15)).toEqual([0, 1, 1, 0]);
  });

  it('should return [0, 0, 2, 0] when 20 cents are entered', () => {
    expect(getCoinCombination(20)).toEqual([0, 0, 2, 0]);
  });

  it('should return [0, 1, 0, 1] when 30 cents are entered', () => {
    expect(getCoinCombination(30)).toEqual([0, 1, 0, 1]);
  });

  it('should return [0, 0, 1, 2] when 60 cents are entered', () => {
    expect(getCoinCombination(60)).toEqual([0, 0, 1, 2]);
  });

  it('should return [4, 0, 2, 3] when 99 cents are entered', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  it('should return [3, 0, 2, 4] when 123 cents are entered', () => {
    expect(getCoinCombination(123)).toEqual([3, 0, 2, 4]);
  });
});
