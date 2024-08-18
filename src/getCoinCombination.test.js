'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('should be declared', () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return an array', () => {
    expect(getCoinCombination(0))
      .toBeInstanceOf(Array);
  });

  it('should return an array with 4 elements', () => {
    expect(getCoinCombination(0))
      .toHaveLength(4);
  });

  it(`should return [0, 0, 0, 0] for 0`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });
});
