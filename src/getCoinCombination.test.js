'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return an array', () => {
    const result = getCoinCombination(3);

    expect(result).toBeInstanceOf(Array);
  });

  it('should return an array of length 4', () => {
    const result = getCoinCombination(3);

    expect(result).toHaveLength(4);
  });

  it('should return [1, 0, 0, 0] for 1 cent', () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([0, 0, 0, 1]);
  });

  it('should return [1, 1, 0, 0] for 6 cents', () => {
    const result = getCoinCombination(6);

    expect(result).toEqual([0, 0, 1, 1]);
  });

  it('should return [2, 1, 1, 0] for 17 cents', () => {
    const result = getCoinCombination(17);

    expect(result).toEqual([0, 1, 1, 2]);
  });

  it('should return [0, 0, 0, 2] for 50 cents', () => {
    const result = getCoinCombination(50);

    expect(result).toEqual([2, 0, 0, 0]);
  });
});
