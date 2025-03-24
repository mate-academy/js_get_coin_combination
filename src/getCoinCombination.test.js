'use strict';

const { getCoinCombination } = require('./getCoinCombination');

describe('getCoinCombination', () => {
  it('should be declared', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return [1, 0, 0, 0] for 1 cent', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  it('should return [1, 1, 0, 0] for 6 cents', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  it('should return [2, 1, 1, 0] for 17 cents', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  it('should return [0, 0, 0, 2] for 50 cents', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  it('should return [0, 0, 0, 0] for 0 cents (minimum boundary)', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return [4, 0, 0, 0] for 4 cents (maximum before 5 cents)', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it('should return [0, 1, 0, 0]for 5 cents (boundary for 5-cent coin)', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  it('should return[4, 1, 0, 0]for 9 cents (boundary forb 9-cent coin)', () => {
    expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
  });

  it('should return[0, 0, 1, 0]for 10 cents(boundary for 10-cent coin)', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  });

  it('should return[0, 0, 2, 0]for 20cents(boundary for 10-cent coins)', () => {
    expect(getCoinCombination(20)).toEqual([0, 0, 2, 0]);
  });

  it('should return[4, 0, 2, 0]for 24 cents(boundary for 24-cent coin)', () => {
    expect(getCoinCombination(24)).toEqual([4, 0, 2, 0]);
  });

  it('should return[0, 0, 0, 1]for 25 cents(boundary for 25-cent coin)', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  });
});
