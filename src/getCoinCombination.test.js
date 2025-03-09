'use strict';

const getCoinCombination = require('./getCoinCombination');

test('should return correct coin combination for 87', () => {
  expect(getCoinCombination(87)).toEqual([50, 20, 10, 5, 2]);
});

test('should return correct coin combination for 99', () => {
  expect(getCoinCombination(99)).toEqual([50, 20, 20, 5, 2, 2]);
});
