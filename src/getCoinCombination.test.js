'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return an array', () => {
    expect(getCoinCombination(1)).toBeInstanceOf(Array);
  });

  it('should return an array with 4 elements', () => {
    expect(getCoinCombination(3).length).toBe(4);
  });

  it('should return [0, 0, 0, 2] for the input of 50', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should return [0, 1, 0, 0] for the input of 5', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should return [1, 1, 0, 0] for the input of 6', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });
});
