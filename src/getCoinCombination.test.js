'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('for 1 cent [1, 0, 0, 0]', () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it('for 6 cents [1, 1, 0, 0]', () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it('for 17 cents [2, 1, 1, 0]', () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  it('for 50 cents [0, 0, 0, 2]', () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });
});
