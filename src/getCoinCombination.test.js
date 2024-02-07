'use strict';

const getCoinCombination = require('./getCoinCombination');

it('should return 0 if nothing provided', () => {
expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
});

it('should return correct array of only for pennies', () => {
expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
});

it('should return correct array of pennies and nickel combination', () => {
expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
});

it('should return correct array of pennies, nickel, dime combination', () => {
expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
});

it('should return correct array of quarters', () => {
expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
});

it('should return correct array of mix of a totall', () => {
expect(getCoinCombination(166)).toEqual([1, 1, 1, 6]);
});