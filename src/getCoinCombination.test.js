'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });
});

it('should return [0, 0, 0, 0] for 0 cents', () => {
  expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
 })

 it('should return [0, 1, 0, 0] for 0 cents', () => {
  expect(getCoinCombination(5)).toEqual([1, 1, 0, 0]);
 })

 it('should return [0, 0, 1, 0] for 0 cents', () => {
  expect(getCoinCombination(10)).toEqual([2, 1, 1, 0]);
 })

 it('should return [0, 0, 0, 2] for 0 cents', () => {
  expect(getCoinCombination(25)).toEqual([0, 0, 0, 2]);
 })