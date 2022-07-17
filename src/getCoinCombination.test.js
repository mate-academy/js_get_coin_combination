'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return an array', () => {
    expect(getCoinCombination())
      .toBeInstanceOf(Array);
  });

  it('should return [0, 0, 0, 0] when the input is (0)', () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it('should retun [3, 0, 1, 2] when the input is (63)', () => {
    expect(getCoinCombination(63))
      .toEqual([3, 0, 1, 2]);
  });

  it('should retun [2, 1, 0, 0] when the input is (7)', () => {
    expect(getCoinCombination(7))
      .toEqual([2, 1, 0, 0]);
  });
});
