'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return [0, 0, 0, 0] if coins === 0', () => {
    const result = getCoinCombination(0);

    expect(result).toStrictEqual([0, 0, 0, 0]);
  });

  it('should return 3 pennies if coins are less than 5', () => {
    const result = getCoinCombination(3);

    expect(result).toStrictEqual([3, 0, 0, 0]);
  });

  it('should return 1 nickel if coins === 5', () => {
    const result = getCoinCombination(5);

    expect(result).toStrictEqual([0, 1, 0, 0]);
  });

  it('should return 2 pennies and 1 nickel if coins === 7', () => {
    const result = getCoinCombination(7);

    expect(result).toStrictEqual([2, 1, 0, 0]);
  });

  it('should return 1 dime if coins === 10', () => {
    const result = getCoinCombination(10);

    expect(result).toStrictEqual([0, 0, 1, 0]);
  });

  it('should return 1 dime, 1 nickel and 1 pennie if coins === 16', () => {
    const result = getCoinCombination(16);

    expect(result).toStrictEqual([1, 1, 1, 0]);
  });

  it('should return 1 quater if coins === 25', () => {
    const result = getCoinCombination(25);

    expect(result).toStrictEqual([0, 0, 0, 1]);
  });

  it(`should return 1 quater, 1 dime, 1 nickel and 3 pennies `
    + `if coins === 118`, () => {
    const result = getCoinCombination(118);

    expect(result).toStrictEqual([3, 1, 1, 4]);
  });
});
