'use strict';

const getCoinCombination = require('./getCoinCombination');

test('should return correct coins for 1 cent', () => {
  expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
});

test('should return correct coins for a value using pennies and nickels', () => {
  expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
});

test('should return correct coins for a value using pennies, nickels, and dimes', () => {
  expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
});

test('should return only quarters when possible', () => {
  expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
});

test('should return zero coins for zero cents', () => {
  expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
});
