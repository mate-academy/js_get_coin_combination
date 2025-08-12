'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return correct coin combination for 0 cents`, () => {
    const res = getCoinCombination(0);

    expect(res).toEqual([0, 0, 0, 0]);
  });

  it(`should return correct coin combination for 1 cent`, () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it(`should return correct coin combination for 6 cents`, () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return correct coin combination for 16 cents', () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  it('should return correct coin combination for 25 cents', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should return correct coin combination for 41 cents', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it('should throw an error for non integer cents', () => {
    expect(() => getCoinCombination(4.5)).toThrow('Cents must be an integer');
  });

  it('should throw an error if cents < 0', () => {
    expect(() => getCoinCombination(-3))
      .toThrow('Cents must be a positive number');
  });
});
