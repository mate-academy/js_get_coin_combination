/* eslint-disable max-len */
'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('should be declared', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return [1, 0, 0, 0] for 1 cent (1 penny)', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return [1, 1, 0, 0] for 6 cents (1 penny + 1 nickel)', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return [2, 1, 1, 0] for 17 cents (1 dime + 1 nickel + 2 penny', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('should return [0, 0, 0, 2] for 50 cents (2 quarters)', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should return [0, 0, 0, 0] for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return correct combination for 41 cents (1 quarter + 1 dime + 1 nickel + 1 penny', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it('should return correct combination for 99 cents (3 quarter + 2 dimes + 0 nickel + 4 pennies', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
  });

  it('should return correct combination for 73 cents (2 quarters + 2 dimes + 0 nickel + 3 pennies)', () => {
    expect(getCoinCombination(73)).toEqual([3, 0, 2, 2]);
  });

  it('should return correct combination for 100 cents (4 quarters)', () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
  });
});
