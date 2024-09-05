'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return [0, 0, 0, 0] for 0 cents (no coins needed)', () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]); // No coins needed
  });

  it('should return [3, 0, 0, 0] for 3 cents (pennies only)', () => {
    const result = getCoinCombination(3);

    expect(result).toEqual([3, 0, 0, 0]);
  });

  it('should return [0, 1, 0, 0] for 5 cents (1 nickel)', () => {
    const result = getCoinCombination(5);

    expect(result).toEqual([0, 1, 0, 0]);
  });

  it('should return [2, 1, 0, 0] for 7 cents (nickels and pennies)', () => {
    const result = getCoinCombination(7);

    expect(result).toEqual([2, 1, 0, 0]);
  });

  it('should return [0, 0, 1, 0] for 10 cents (1 dime)', () => {
    const result = getCoinCombination(10);

    expect(result).toEqual([0, 0, 1, 0]); // 1 dime
  });

  it('should return [4, 1, 1, 0] for 19 cents', () => {
    const result = getCoinCombination(19);

    expect(result).toEqual([4, 1, 1, 0]);
  });

  it('should return [0, 0, 0, 1] for 25 cents (1 quarter)', () => {
    const result = getCoinCombination(25);

    expect(result).toEqual([0, 0, 0, 1]); // 1 quarter
  });

  it('should return [4, 0, 2, 3] for 99 cents', () => {
    const result = getCoinCombination(99);

    expect(result).toEqual([4, 0, 2, 3]);
  });
});
