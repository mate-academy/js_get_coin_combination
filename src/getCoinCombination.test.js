'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should correctly handle adding pennies', () => {
  expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
});

it('should correctly handle adding nickels', () => {
  expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
});

it('should correctly handle adding dimes', () => {
  expect(getCoinCombination(75)).toEqual([0, 0, 0, 3]);
});

it('should correctly handle adding quarters', () => {
  expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
});

it('should correctly handle adding pennies and nickels', () => {
  expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
});

it('should correctly handle adding dimes and quarters', () => {
  expect(getCoinCombination(70)).toEqual([0, 0, 2, 2]);
});

it('should correctly handle fractional numbers by adding pennies', () => {
  expect(getCoinCombination(1.5)).toEqual([1, 0, 0, 0]);
});

it('should correctly handle invalid values by returning NaN for all coin types', () => {
  expect(getCoinCombination('test')).toEqual([NaN, NaN, NaN, NaN]);
});

it('should correctly handle negative numbers by adding negative quarters', () => {
  expect(getCoinCombination(-100)).toEqual([0, 0, 0, -4]);
});

});
