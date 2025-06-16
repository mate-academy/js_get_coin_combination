/* eslint-disable max-len */
'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return number of pennies same as number of cents if cents < 1 nickel ', () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  it('shpuld return max nickels and rest pennies if cents < 1 dime', () => {
    const result = getCoinCombination(7);

    expect(result).toEqual([2, 1, 0, 0]);
  });

  it('should return max dimes, nickels and rest pennies if cents < 1 quarter', () => {
    const result = getCoinCombination(23);

    expect(result).toEqual([3, 0, 2, 0]);
  });

  it('should return max quarters, dimes,nickels and rest pennies if cents > 1 quarter', () => {
    const result = getCoinCombination(42);

    expect(result).toEqual([2, 1, 1, 1]);
  });
});
