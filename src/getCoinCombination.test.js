'use strict';

const getCoinCombination = require('./getCoinCombination');

test('should return correct coin combination for 87', () => {
  expect(getCoinCombination(87))
    .toEqual([3, 1, 0, 2]); // [3 Quarters, 1 Dime, 0 Nickels, 2 Pennies]
});

test('should return correct coin combination for 99', () => {
  expect(getCoinCombination(99))
    .toEqual([3, 2, 0, 4]); // [3 Quarters, 2 Dimes, 0 Nickels, 4 Pennies]
});
