'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should count pennies', () => {
    const expected = getCoinCombination(1);

    expect(expected).toEqual([1, 0, 0, 0]);
  });

  it('should count nickels', () => {
    const expected = getCoinCombination(6);

    expect(expected).toEqual([1, 1, 0, 0]);
  });

  it('should count dimes', () => {
    const expected = getCoinCombination(17);

    expect(expected).toEqual([2, 1, 1, 0]);
  });

  it('should count quarters', () => {
    const expected = getCoinCombination(50);

    expect(expected).toEqual([0, 0, 0, 2]);
  });
});
