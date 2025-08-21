'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('retun [0,0,0,2] for 50', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('retun [0, 0, 0, 0] for 0', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return an array of four numbers', () => {
    expect(getCoinCombination(99)).toHaveLength(4);
  });
});
