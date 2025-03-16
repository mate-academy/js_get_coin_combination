'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should be return [1, 0, 0, 0] for (1)', () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it('should be return [1, 1, 0, 0] for (6)', () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it('should be return [2, 1, 1, 0] for (17)', () => {
    expect(getCoinCombination(17))
      .toEqual([2, 1, 1, 0]);
  });

  it('should be return [0, 0, 0, 2] for (50)', () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });
});
