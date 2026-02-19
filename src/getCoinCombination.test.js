'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('number of pennies (1 penny = 1 cent)', () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  it(' number of nickels (1 nickel = 5 cents)', () => {
    const result = getCoinCombination(5);

    expect(result).toEqual([0, 5, 0, 0]);
  });

  it('number of dimes (1 dime = 10 cents)', () => {
    const result = getCoinCombination(10);

    expect(result).toEqual([0, 0, 1, 0]);
  });

  it('number of quarters (1 quarter = 25 cents)', () => {
    const result = getCoinCombination(25);

    expect(result).toEqual([0, 0, 0, 1]);
  });

  it('returns correct combination for 6 cents', () => {
    const result = getCoinCombination(6);

    expect(result).toEqual([1, 1, 0, 0]);
  });

  it('returns correct combination for 17 cents', () => {
    const result = getCoinCombination(17);

    expect(result).toEqual([2, 1, 1, 0]);
  });

  it('returns correct combination for 50 cents', () => {
    const result = getCoinCombination(50);

    expect(result).toEqual([0, 0, 0, 2]);
  });

  it('returns correct combination for 99 cents', () => {
    const result = getCoinCombination(99);

    expect(result).toEqual([4, 0, 2, 3]);
  });

  it('returns correct combination for 0 cent', () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it('returns correct length', () => {
    const result = getCoinCombination(0);

    expect(result).toHaveLength(4);
  });

  it('returns correct type', () => {
    const result = getCoinCombination(5).every(n => typeof n === 'number');

    expect(result).toBeTruthy();
  });
});
