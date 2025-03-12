'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('should be declared', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return [0, 0, 0, 0] for 0 cents', () => {
    const result = getCoinCombination(0);
    expect(result).toEqual([0, 0, 0, 0]);
  });

  it('should return [1, 0, 0, 0] for 1 cent', () => {
    const result = getCoinCombination(1);
    expect(result).toEqual([1, 0, 0, 0]);
  });

  it('should return [0, 1, 0, 0] for 5 cents', () => {
    const result = getCoinCombination(5);
    expect(result).toEqual([0, 1, 0, 0]);
  });

  it('should return [0, 0, 1, 0] for 10 cents', () => {
    const result = getCoinCombination(10);
    expect(result).toEqual([0, 0, 1, 0]);
  });

  it('should return [0, 0, 0, 1] for 25 cents', () => {
    const result = getCoinCombination(25);
    expect(result).toEqual([0, 0, 0, 1]);
  });

  it('should return [0, 0, 2, 0] for 20 cents', () => {
    const result = getCoinCombination(20);
    expect(result).toEqual([0, 0, 2, 0]);
  });

  it('should return [1, 1, 0, 1] for 31 cents', () => {
    const result = getCoinCombination(31);
    expect(result).toEqual([1, 1, 0, 1]);
  });

  it('should return [4, 0, 0, 1] for 29 cents', () => {
    const result = getCoinCombination(29);
    expect(result).toEqual([4, 0, 0, 1]);
  });
});
