'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return array of zeroes for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should rertun [4, 0, 0, 0] for 4 cents', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it('should rertun [2, 1, 0, 0] for 7 cents', () => {
    expect(getCoinCombination(7)).toEqual([2, 1, 0, 0]);
  });

  it('should rertun [1, 0, 2, 3] for 96 cents', () => {
    expect(getCoinCombination(96)).toEqual([1, 0, 2, 3]);
  });

  it('should rertun [3, 1, 1, 5] for 143 cents', () => {
    expect(getCoinCombination(143)).toEqual([3, 1, 1, 5]);
  });

  it('should rertun [2, 1, 1, 0] for 17 cents', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });
});
