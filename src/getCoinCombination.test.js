'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return array', () => {
    expect(getCoinCombination()).toBeInstanceOf(Array);
  });

  it(`'cents' = 0 should return [0, 0, 0, 0]`, () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it(`'cents' = 1 should return [1, 0, 0, 0]`, () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  it(`'cents' = 6 should return [1, 1, 0, 0]`, () => {
    const result = getCoinCombination(6);

    expect(result).toEqual([1, 1, 0, 0]);
  });

  it(`'cents' = 17 should return [2, 1, 1, 0]`, () => {
    const result = getCoinCombination(17);

    expect(result).toEqual([2, 1, 1, 0]);
  });

  it(`'cents' = 50 should return [0, 0, 0, 2]`, () => {
    const result = getCoinCombination(50);

    expect(result).toEqual([0, 0, 0, 2]);
  });

  it(`'cents' is a positive decimal should return [0, 0, 0, 0]`, () => {
    const result = getCoinCombination(1.7);

    expect(result).toEqual([1, 0, 0, 0]);
  });
});
