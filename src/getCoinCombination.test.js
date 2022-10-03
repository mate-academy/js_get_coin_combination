'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('is declared', () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('returns an array', () => {
    expect(getCoinCombination(3))
      .toBeInstanceOf(Array);
  });

  it('returns an array with length of 4', () => {
    expect(getCoinCombination(3).length)
      .toBe(4);
  });

  it('returns all zeros for input <= 0', () => {
    expect(getCoinCombination(-5))
      .toEqual([0, 0, 0, 0]);
  });

  it('returns correct amount of quarters', () => {
    expect(getCoinCombination(67)[3])
      .toBe(2);
  });

  it('returns correct amount of dimes', () => {
    expect(getCoinCombination(67)[2])
      .toBe(1);
  });

  it('returns correct amount of nickels', () => {
    expect(getCoinCombination(67)[1])
      .toBe(1);
  });

  it('returns correct amount of pennies', () => {
    expect(getCoinCombination(67)[0])
      .toBe(2);
  });

  it('returns only quarters, others are 0\'s', () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  });

  it('returns only nickels, others are 0\'s', () => {
    expect(getCoinCombination(20))
      .toEqual([0, 0, 2, 0]);
  });

  it('returns only dimes, others are 0\'s', () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  });

  it('returns only pennies, others are 0\'s', () => {
    expect(getCoinCombination(3))
      .toEqual([3, 0, 0, 0]);
  });
});
