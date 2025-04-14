'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array as a result`, () => {
    expect(getCoinCombination())
      .toBeInstanceOf(Array);
  });

  it('should has length = 4', () => {
    const result = getCoinCombination(0);

    expect(result).toHaveLength(4);
  });

  it('should return [0, 0, 0, 0] with 0 as a param', () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it('should return [1, 0, 0, 0] with 1 as a param', () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  it('should return [1, 1, 0, 0] with 6 in params', () => {
    const result = getCoinCombination(6);

    expect(result).toEqual([1, 1, 0, 0]);
  });

  it('should return [2, 1, 1, 0] with 17 in params', () => {
    const result = getCoinCombination(17);

    expect(result).toEqual([2, 1, 1, 0]);
  });

  it('should return [0, 0, 0, 2] with 50 in params', () => {
    const result = getCoinCombination(50);

    expect(result).toEqual([0, 0, 0, 2]);
  });
});
