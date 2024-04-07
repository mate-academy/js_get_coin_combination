'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getCoinCombination())
      .toBeInstanceOf(Array);
  });

  it(`should return [0, 0, 0, 0] if 'cents' === 0`, () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it(`should return [1, 0, 0, 0] if 'cents' === 1`, () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  it(`should return [1, 1, 0, 0] if 'cents' === 6`, () => {
    const result = getCoinCombination(6);

    expect(result).toEqual([1, 1, 0, 0]);
  });

  it(`should return [1, 1, 1, 0] if 'cents' === 16`, () => {
    const result = getCoinCombination(16);

    expect(result).toEqual([1, 1, 1, 0]);
  });

  it(`should return [1, 1, 1, 1] if 'cents' === 41`, () => {
    const result = getCoinCombination(41);

    expect(result).toEqual([1, 1, 1, 1]);
  });
});
