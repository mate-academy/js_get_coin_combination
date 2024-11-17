'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return [0, 0, 0, 0] for 0 ', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('If accept pennys only', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('If accept only nikel', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('If accept only dime', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('If accept  only quoters ', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should return [1,1,0,0] for 6', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return [1,1,1,0] for 16', () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  it('should return [1,1,1,1] for 41', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it('should return [0,1,1,0] for 15', () => {
    expect(getCoinCombination(15)).toEqual([0, 1, 1, 0]);
  });

  it('should return [0,0,1,1] for 35 ', () => {
    expect(getCoinCombination(35)).toEqual([0, 0, 1, 1]);
  });
});
