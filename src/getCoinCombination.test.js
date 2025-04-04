'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return [1, 0, 0, 0] from 1', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return [1, 1, 0, 0] from 6', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return [1, 1, 1, 0] from 16', () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  it('should return [1, 1, 1, 1] from 41', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it('should return [0, 1, 1, 0] from 15', () => {
    expect(getCoinCombination(15)).toEqual([0, 1, 1, 0]);
  });

  it('should return [0, 0, 1, 1] from 35', () => {
    expect(getCoinCombination(35)).toEqual([0, 0, 1, 1]);
  });

  it('should return [0, 1, 1, 1] from 40', () => {
    expect(getCoinCombination(40)).toEqual([0, 1, 1, 1]);
  });

  it('should return [0, 1, 0, 0] from 015', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should return [0, 0, 1, 0] from 10', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('should return [0, 0, 0, 1] from 25', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });

  it('should return [1, 0, 1, 1] from 36', () => {
    expect(getCoinCombination(36)).toEqual([1, 0, 1, 1]);
  });

  it('should return [1, 1, 0, 1] from 31', () => {
    expect(getCoinCombination(31)).toEqual([1, 1, 0, 1]);
  });
});
