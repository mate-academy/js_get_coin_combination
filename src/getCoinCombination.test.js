'use strict';

const getCoinCombination = require('./getCoinCombination');

test('should return no coins for 0 cents', () => {
  expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
});

test('should return only pennies for amounts less than 5', () => {
  expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
});

test('should use a nickel starting from 5 cents', () => {
  expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
});

test('should use a dime starting from 10 cents', () => {
  expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
  expect(getCoinCombination(15)).toEqual([0, 1, 1, 0]);
  expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  expect(getCoinCombination(20)).toEqual([0, 0, 2, 0]);
});

test('should use a quarter starting from 25 cents', () => {
  expect(getCoinCombination(24)).toEqual([4, 0, 2, 0]);
  expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
  expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
});

test('should combine all kinds of coins', () => {
  expect(getCoinCombination(30)).toEqual([0, 1, 0, 1]);
  expect(getCoinCombination(40)).toEqual([0, 1, 1, 1]);
  expect(getCoinCombination(49)).toEqual([4, 0, 2, 1]);
  expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
});

test('should handle big amounts', () => {
  expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
  expect(getCoinCombination(1000)).toEqual([0, 0, 0, 40]);
});

test('should return an array of 4 elements', () => {
  expect(getCoinCombination(17)).toHaveLength(4);
});

test('should return coins that sum up to the given amount', () => {
  const values = [1, 5, 10, 25];

  [1, 17, 49, 99, 123].forEach((cents) => {
    const coins = getCoinCombination(cents);
    const total = coins.reduce((sum, count, i) => sum + count * values[i], 0);

    expect(total).toBe(cents);
  });
});
