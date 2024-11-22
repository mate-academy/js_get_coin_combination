'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should be 1 penny if "cents" = 1', () => {
    const result = getCoinCombination(1);

    expect(result).toStrictEqual([1, 0, 0, 0]);
  });

  it('should be 1 penny + 1 nickel if "cents" = 6', () => {
    const result = getCoinCombination(6);

    expect(result).toStrictEqual([1, 1, 0, 0]);
  });

  it('should be 2 pennies + 1 nickel + 1 dime if "cents" = 17', () => {
    const result = getCoinCombination(17);

    expect(result).toStrictEqual([2, 1, 1, 0]);
  });

  it('should be 2 2 quarters if "cents" = 50', () => {
    const result = getCoinCombination(50);

    expect(result).toStrictEqual([0, 0, 0, 2]);
  });
});
