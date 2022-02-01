'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return [1, 1, 1, 1] when value equal to 41`, () => {
    const result = getCoinCombination(41);

    expect(result)
      .toEqual([1, 1, 1, 1]);
  });

  it(`should return [cents] when value < 0`, () => {
    const result = getCoinCombination(-3);

    expect(result)
      .toEqual([-3]);
  });

  it(`should return [0, 0, 0, 0] when value equal 0`, () => {
    const result = getCoinCombination(0);

    expect(result)
      .toEqual([0, 0, 0, 0]);
  });

  it(`should discard floating point`, () => {
    const result = getCoinCombination(15.3);

    expect(result)
      .toEqual([0, 1, 1, 0]);
  });
});
