'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return penny', () => {
    const result = getCoinCombination(1);
    const expectedResult = [1, 0, 0, 0];

    expect(result).toEqual(expectedResult);
  });

  it('should return nickel', () => {
    const result = getCoinCombination(6);
    const expectedResult = [1, 1, 0, 0];

    expect(result).toEqual(expectedResult);
  });

  it('should return dime', () => {
    const result = getCoinCombination(17);
    const expectedResult = [2, 1, 1, 0];

    expect(result).toEqual(expectedResult);
  });

  it('should return quarter', () => {
    const result = getCoinCombination(50);
    const expectedResult = [0, 0, 0, 2];

    expect(result).toEqual(expectedResult);
  });
});
