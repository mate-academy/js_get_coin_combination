'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return [4, 0, 0, 0] for the input value (4)', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it('should return [0, 1, 0, 0] for the input value (5)', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should return [4, 1, 0, 0] for the input value (9)', () => {
    expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
  });

  it('should return [0, 0, 1, 0] for the input value (10)', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('should return [4, 0, 2, 0] for the input value (24)', () => {
    expect(getCoinCombination(24)).toEqual([4, 0, 2, 0]);
  });

  it('should return [0, 0, 0, 1] for the input value (25)', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });
});
