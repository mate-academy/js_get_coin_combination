'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('if input 1, should return [1, 0, 0, 0] ', () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  it('if input 6, should return [1, 1, 0, 0] ', () => {
    const result = getCoinCombination(6);

    expect(result).toEqual([1, 1, 0, 0]);
  });

  it('if input 17, should return [2, 1, 1, 0] ', () => {
    const result = getCoinCombination(17);

    expect(result).toEqual([2, 1, 1, 0]);
  });

  it('if input 50, should return [0, 0, 0, 2] ', () => {
    const result = getCoinCombination(50);

    expect(result).toEqual([0, 0, 0, 2]);
  });
});
