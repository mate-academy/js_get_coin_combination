'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`throw an error if 'cents' is negative non-integer number`, () => {
    expect(() => getCoinCombination(-1.1))
      .toThrow();
  });

  it(`return '[1, 0, 0, 0]' if 'coins' = 1`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`return '[1, 1, 0, 0]' if 'coins' = 6`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it(`return '[2, 1, 1, 0]' if 'coins' = 17`, () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it(`return '[0, 0, 0, 2]' if 'coins' = 50`, () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
