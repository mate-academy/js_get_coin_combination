'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  // could be hidden
  it(`should throw error if input is not positive integer`, () => {
    const errorText = 'Input should be a non-negative integer';

    expect(() => getCoinCombination(null)).toThrow(errorText);
    expect(() => getCoinCombination(NaN)).toThrow(errorText);
    expect(() => getCoinCombination(-100)).toThrow(errorText);
    expect(() => getCoinCombination('1')).toThrow(errorText);
    expect(() => getCoinCombination(false)).toThrow(errorText);
  });

  it(`should return [1, 0, 0, 0] for input 1`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it(`should return [1, 1, 0, 0] for input 6`, () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(`should return [1, 1, 1, 0] for input 16`, () => {
    expect(getCoinCombination(16))
      .toEqual([1, 1, 1, 0]);
  });

  it(`should return [1, 1, 1, 1] for input 41`, () => {
    expect(getCoinCombination(41))
      .toEqual([1, 1, 1, 1]);
  });

  it(`should return [0, 0, 1, 0] for input 10`, () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });

  it(`should return [4, 0, 2, 2] for input 74`, () => {
    expect(getCoinCombination(74))
      .toEqual([4, 0, 2, 2]);
  });
});
