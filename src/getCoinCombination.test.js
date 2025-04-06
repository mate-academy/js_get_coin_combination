/* eslint-disable no-unused-vars */
'use strict';

const { SearchSource } = require('jest');

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return an array', () => {
    expect(getCoinCombination())
      .toBeInstanceOf(Array);
  });

  it(`return 0 when 'cents' is 0`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  });

  it('properly count boundary values', () => {
    expect(getCoinCombination(2))
      .toEqual([2, 0, 0, 0]);

    expect(getCoinCombination(4))
      .toEqual([4, 0, 0, 0]);

    expect(getCoinCombination(6))
      .toEqual([1, 1, 0, 0]);

    expect(getCoinCombination(9))
      .toEqual([4, 1, 0, 0]);

    expect(getCoinCombination(11))
      .toEqual([1, 0, 1, 0]);

    expect(getCoinCombination(24))
      .toEqual([4, 0, 2, 0]);

    expect(getCoinCombination(26))
      .toEqual([1, 0, 0, 1]);
  });

  it('return all types of coins', () => {
    expect(getCoinCombination(41))
      .toEqual([1, 1, 1, 1]);
  });

  it('return combination for smallest possible number of coins', () => {
    expect(getCoinCombination(82))
      .toEqual([2, 1, 0, 3]);
  });

  it('return correct type for value given', () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);

    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);

    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);

    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  });

  it('return NaN when no passed arguments', () => {
    expect(getCoinCombination())
      .toEqual([NaN, NaN, NaN, NaN]);
  });

  it('return NaN when passed a string', () => {
    expect(getCoinCombination('string'))
      .toEqual([NaN, NaN, NaN, NaN]);
  });

  it('work with negative numbers', () => {
    expect(getCoinCombination(-24))
      .toEqual([1, 0, 0, -1]);

    expect(getCoinCombination(-41))
      .toEqual([4, 1, 0, -2]);
  });

  it('return coins rounded down for non-integers', () => {
    expect(getCoinCombination(4.8))
      .toEqual([4, 0, 0, 0]);

    expect(getCoinCombination(24.7))
      .toEqual([4, 0, 2, 0]);

    expect(getCoinCombination(12.9))
      .toEqual([2, 0, 1, 0]);
  });
});
