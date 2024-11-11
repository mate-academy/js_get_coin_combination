'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`'should return [0, 0, 0, 0] for 0 cents'`, () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return [1, 0, 0, 0] for 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return [0, 1, 0, 0] for 6 cents', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should return [0, 0, 1, 0] for 10 cents', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('should return [2, 0, 0, 1] for 27 cents', () => {
    expect(getCoinCombination(27)).toEqual([2, 0, 0, 1]);
  });

  it('should return [3, 1, 1, 2] for 68 cents', () => {
    expect(getCoinCombination(68)).toEqual([3, 1, 1, 2]);
  });

  it(`should return [4, 0, 2, 3] for 99 cents`, () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  it(`should return [3, 0, 2, 4] for 123 cents`, () => {
    expect(getCoinCombination(123)).toEqual([3, 0, 2, 4]);
  });
});
