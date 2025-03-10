'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return an array', () => {
    expect(getCoinCombination())
      .toBeInstanceOf(Array);
  });

  it('should return [0, 0, 0, 0] when input is 0', () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it('should make coins[0] more than 0 if input from 1 to 4', () => {
    expect(getCoinCombination(3))
      .toEqual([3, 0, 0, 0]);
  });

  it('should make coins[1] more than 0 if input from 5 to 9', () => {
    expect(getCoinCombination(7))
      .toEqual([2, 1, 0, 0]);
  });

  it('should make coins[2] more than 0 if input from 10 to 24', () => {
    expect(getCoinCombination(15))
      .toEqual([0, 1, 1, 0]);
  });

  it('should make coins[3] more than 0 if input from 25', () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });

  it('should calculate each number of array properly', () => {
    expect(getCoinCombination(118))
      .toEqual([3, 1, 1, 4]);
  });
});
