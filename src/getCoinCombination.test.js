'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should count quarters', () => {
    const result = getCoinCombination(75);

    expect(result).toEqual([0, 0, 0, 3]);
  });

  it('should count daims', () => {
    const result = getCoinCombination(20);

    expect(result).toEqual([0, 0, 2, 0]);
  });

  it('should count nickels', () => {
    const result = getCoinCombination(5);

    expect(result).toEqual([0, 1, 0, 0]);
  });

  it('should count pennies', () => {
    const result = getCoinCombination(3);

    expect(result).toEqual([3, 0, 0, 0]);
  });

  it('should count mixed coins correctly', () => {
    const result = getCoinCombination(91);

    expect(result).toEqual([1, 1, 1, 3]);
  });

  it('should return all zeros for 0 cents', () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });
});
