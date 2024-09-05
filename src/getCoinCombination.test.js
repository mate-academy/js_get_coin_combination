'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('should be declared', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return [1, 0, 0, 0] when the input is 1', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return [1, 1, 0, 0] when the input is 6', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return [2, 1, 1, 0] when the input is 17', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('should return [0, 0, 0, 2] when the input is 50', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should return [4, 0, 1, 2] when the input is 64', () => {
    expect(getCoinCombination(64)).toEqual([4, 0, 1, 2]);
  });

  it('should return [0, 0, 1, 3] when the input is 85', () => {
    expect(getCoinCombination(85)).toEqual([0, 0, 1, 3]);
  });

  it('should return [4, 0, 0, 1] when the input is 29', () => {
    expect(getCoinCombination(29)).toEqual([4, 0, 0, 1]);
  });

  it('should return [0, 1, 0, 1] when the input is 30', () => {
    expect(getCoinCombination(30)).toEqual([0, 1, 0, 1]);
  });

  it('should return [0, 0, 0, 0] when the input is 0', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });
});
