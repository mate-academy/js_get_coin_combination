'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return [1, 1, 1, 1] for 41 cents', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it('should return [0, 0, 0, 0] for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return [0, 0, 0, 1] for 25 cents', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should return [3, 0, 1, 2] for 58 cents', () => {
    expect(getCoinCombination(58)).toEqual([3, 1, 0, 2]);
  });

  it('should return [4, 0, 0, 0] for 4 cents (only 1c coins)', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });
});
