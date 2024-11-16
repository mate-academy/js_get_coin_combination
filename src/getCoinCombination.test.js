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

  it('should return numbers in array', () => {
    const result = getCoinCombination(4);

    expect(typeof (result[0])).toBe('number');
  });

  it('should return [0, 0, 0, 0] if input is null', () => {
    expect(getCoinCombination(null)).toEqual([0, 0, 0, 0]);
  });

  it('should return [2, 1, 1, 0]  if input is 17', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('should return [0, 0, 0, 0] if input is 0', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return [1, 1, 1, 1] if input is 41', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });
});
