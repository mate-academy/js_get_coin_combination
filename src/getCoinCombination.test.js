'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('should be declared', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return [1, 0, 0, 0] for 1 cent (1 penny)', () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  });

  it('should return [1, 1, 0, 0] for 6 cents (1 penny + 1 nickel)', () => {
    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);
  });

  it(
    'should return [2, 1, 1, 0] for 17 cents '
    + '(2 pennies + 1 nickel + 1 dime)',
    () => {
      expect(getCoinCombination(17))
        .toEqual([2, 1, 1, 0]);
    }
  );

  it('should return [0, 0, 0, 2] for 50 cents (2 quarters)', () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });

  it('should return [4, 0, 0, 0] for 4 cents (4 pennies)', () => {
    expect(getCoinCombination(4))
      .toEqual([4, 0, 0, 0]);
  });

  it('should return [0, 0, 0, 4] for 100 cents (4 quarters)', () => {
    expect(getCoinCombination(100))
      .toEqual([0, 0, 0, 4]);
  });

  it('should return [0, 1, 0, 0] for 5 cents (1 nickel)', () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it('should return [0, 0, 1, 0] for 10 cents (1 dime)', () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  });
});
