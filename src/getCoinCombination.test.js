'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return array', () => {
    expect(getCoinCombination(10)).toBeInstanceOf(Array);
  });

  it('should return zeros', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return only penny', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return only nickel', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should return only penny and nickel', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return only dime', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('should return only dime and penny', () => {
    expect(getCoinCombination(11)).toEqual([1, 0, 1, 0]);
  });

  it('should return only dime and nickel', () => {
    expect(getCoinCombination(15)).toEqual([0, 1, 1, 0]);
  });

  it('should return only dime, penny, and nickel', () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  it('should return only quarter', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should return only quarter and penny', () => {
    expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
  });

  it('should return only quarter and nickel', () => {
    expect(getCoinCombination(30)).toEqual([0, 1, 0, 1]);
  });

  it('should return only quarter and dime', () => {
    expect(getCoinCombination(35)).toEqual([0, 0, 1, 1]);
  });

  it('should return only quarter, penny, and nickel', () => {
    expect(getCoinCombination(31)).toEqual([1, 1, 0, 1]);
  });

  it('should return only quarter, penny, and dime', () => {
    expect(getCoinCombination(36)).toEqual([1, 0, 1, 1]);
  });

  it('should return only quarter, nickel, and dime', () => {
    expect(getCoinCombination(40)).toEqual([0, 1, 1, 1]);
  });

  it('should return all coins', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });
});
