'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`order from big sum`, () => {
    const result = getCoinCombination(250);

    expect(result).toEqual([0, 0, 0, 10]);
  });

  it(`order from small sum`, () => {
    const result = getCoinCombination(3);

    expect(result).toEqual([3, 0, 0, 0]);
  });

  it(`order < dollar sum`, () => {
    const result = getCoinCombination(79);

    expect(result).toEqual([4, 0, 0, 3]);
  });

  it(`is Array`, () => {
    const result = getCoinCombination();

    expect(Array.isArray(result));
  });
});
