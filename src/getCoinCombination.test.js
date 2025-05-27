'use strict';

const { getCoinCombination } = require('./getCoinCombination');

test('1 cent → [1, 0, 0, 0]', () => {
  expect(getCoinCombination(1)).toStrictEqual([1, 0, 0, 0]);
});

test('6 cents → [1, 1, 0, 0]', () => {
  expect(getCoinCombination(6)).toStrictEqual([1, 1, 0, 0]);
});

test('17 cents → [2, 1, 1, 0]', () => {
  expect(getCoinCombination(17)).toStrictEqual([2, 1, 1, 0]);
});

test('50 cents → [0, 0, 0, 2]', () => {
  expect(getCoinCombination(50)).toStrictEqual([0, 0, 0, 2]);
});

test('0 cents → [0, 0, 0, 0]', () => {
  expect(getCoinCombination(0)).toStrictEqual([0, 0, 0, 0]);
});

test('99 cents → [4, 0, 2, 3]', () => {
  expect(getCoinCombination(99)).toStrictEqual([4, 0, 2, 3]);
});
