'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`should return an array`, () => {
    expect(getCoinCombination(1)).toBeInstanceOf(Array);
  });

  it(`should return an array with 4 elements`, () => {
    expect(getCoinCombination(1).length).toBe(4);
  });

  it('should return [1, 0, 0, 0] for getCoinCombination(1)', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return [1, 1, 0, 0] for getCoinCombination(6)', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return [0, 0, 0, 2] for getCoinCombination(50)', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should return [2, 1, 1, 0] for getCoinCombination(17)', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });
});
