'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('Input 1 return [1, 0, 0, 0] cent', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('Input 6 return [1, 1, 0, 0] cents', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('Input 17 return [2, 1, 1, 0] cents', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('Input 50 return [0, 0, 0, 2] cents', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });
});
