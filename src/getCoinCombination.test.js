'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return all 0 if 'cents' === 0`, () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it(`should return all 0 if 'cents' < 0`, () => {
    const result = getCoinCombination(-5);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it(`should return correct value`, () => {
    const result = getCoinCombination(41);

    expect(result).toEqual([1, 1, 1, 1]);
  });

  it(`should return all 0 if 'cents' === undefined`, () => {
    const result = getCoinCombination();

    expect(result).toEqual([0, 0, 0, 0]);
  });
});
