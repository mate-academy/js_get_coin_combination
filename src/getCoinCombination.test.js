'use strict';

const getCoinCombination = require('./getCoinCombination');

test('1 cents should return [1, 0, 0, 0]', () => {
  expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
});

test('6 cents should return [1, 1, 0, 0]', () => {
  expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
});

test('17 cents should return [2, 1, 1, 0]', () => {
  expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
});

test('50 cents should return [0, 0, 0, 2]', () => {
  expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
});

test('99 cents should return [4, 0, 2, 3]', () => {
  expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
});

test('100 cents should return [0, 0, 0, 4]', () => {
  expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
});

test('23 cents should return [3, 0, 2, 0]', () => {
  expect(getCoinCombination(23)).toEqual([3, 0, 2, 0]);
});

test('0 cents should return [0, 0, 0, 0]', () => {
  expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
});

test('74 cents should return [4, 0, 2, 2]', () => {
  expect(getCoinCombination(74)).toEqual([4, 0, 2, 2]);
});

test('30 cents should return [0, 1, 0, 1]', () => {
  expect(getCoinCombination(30)).toEqual([0, 1, 0, 1]);
});
