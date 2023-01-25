'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return zero array, if cents = 0', () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it('should return expected array, if 0 < cents < 5', () => {
    const result = getCoinCombination(4);

    expect(result).toEqual([4, 0, 0, 0]);
  });

  it('should return expected array, if 5 <= cents < 10', () => {
    const result = getCoinCombination(8);

    expect(result).toEqual([3, 1, 0, 0]);
  });

  it('should return expected array, if 10 <= cents < 25', () => {
    const result = getCoinCombination(23);

    expect(result).toEqual([3, 0, 2, 0]);
  });

  it('should return expected array, if cents >= 25', () => {
    const result = getCoinCombination(33);

    expect(result).toEqual([3, 1, 0, 1]);
  });
});
