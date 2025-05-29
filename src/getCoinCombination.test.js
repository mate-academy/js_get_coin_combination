'use strict';

describe('getCoinCombination', () => {
  const {
    getCoinCombination,
  } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return [0, 0, 0, 0] for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return correct combination for 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return [NaN, NaN, NaN, NaN] for NaN input', () => {
    const result = getCoinCombination(NaN);

    expect(result).toEqual([NaN, NaN, NaN, NaN]);
  });

  it('should floor decimal numbers', () => {
    expect(getCoinCombination(2.7)).toEqual([2, 0, 0, 0]);
    expect(getCoinCombination(5.9)).toEqual([0, 1, 0, 0]);
  });
});
