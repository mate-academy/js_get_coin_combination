'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return [0, 0, 0, 0] for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return [1, 0, 0, 0] for 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return [0, 1, 0, 0] for 5 cents', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should return [0, 0, 1, 0] for 10 cents', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('should return [0, 0, 0, 1] for 25 cents', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should return [0, 0, 2, 1] for 45 cents', () => {
    expect(getCoinCombination(45)).toEqual([0, 0, 2, 1]);
  });

  it('should return [3, 0, 0, 0] for 3 cents', () => {
    expect(getCoinCombination(3)).toEqual([3, 0, 0, 0]);
  });

  it('should return [1, 0, 1, 1] for 36 cents', () => {
    expect(getCoinCombination(36)).toEqual([1, 0, 1, 1]);
  });

  it('should return [4, 0, 0, 3] for 79 cents', () => {
    expect(getCoinCombination(79)).toEqual([4, 0, 0, 3]);
  });

  it('should return [2, 0, 2, 2] for 72 cents', () => {
    expect(getCoinCombination(72)).toEqual([2, 0, 2, 2]);
  });

  it('should return [0, 1, 1, 1] for 40 cents', () => {
    expect(getCoinCombination(40)).toEqual([0, 1, 1, 1]);
  });
});
