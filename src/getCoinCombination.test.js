'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return [4, 0, 0, 0] for 4 cents', () => {
    expect(getCoinCombination(4))
      .toEqual([4, 0, 0, 0]);
  });

  it('should return [0, 0, 0, 0] for 0 cents', () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it('should return [0, 0, 0, 0] for 0.5 cents', () => {
    expect(getCoinCombination(0.5))
      .toEqual([0, 0, 0, 0]);
  });

  it('should return [4, 0, 1, 5] for 139 cents', () => {
    expect(getCoinCombination(139))
      .toEqual([4, 0, 1, 5]);
  });
});
