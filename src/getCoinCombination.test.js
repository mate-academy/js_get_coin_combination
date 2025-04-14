'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('should be declared', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('shoult return an array', () => {
    expect(getCoinCombination(0)).toBeInstanceOf(Array);
  });

  it('shouldnt not working with non-numeric values', () => {
    expect(getCoinCombination('a')).toEqual([NaN, NaN, NaN, NaN]);
  });

  it('should return [0, 0, 0, 0] with 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return [1, 0, 0, 0] with 1 cents', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return [4, 0, 0, 0] with 4 cents', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it('should return [0, 1, 0, 0] with 5 cents', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should return [1, 1, 0, 0] with 6 cents', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return [0, 0, 1, 0] with 10 cents', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('should return [0, 1, 1, 0] with 15 cents', () => {
    expect(getCoinCombination(15)).toEqual([0, 1, 1, 0]);
  });

  it('should return [1, 1, 1, 0] with 16 cents', () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  it('should return [0, 0, 0, 1] with 25 cents', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should return [4, 1, 0, 49] with 1234 cents', () => {
    expect(getCoinCombination(1234)).toEqual([4, 1, 0, 49]);
  });
});
