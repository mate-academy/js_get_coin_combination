'use strict';

const getCoinCombination = require('./getCoinCombination');

test('getCoinCombination should handle basic cases', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
});

test('getCoinCombination should handle zero cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
});

test('getCoinCombination should handle only quarters', () => {
    expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
    expect(getCoinCombination(75)).toEqual([0, 0, 0, 3]);
});

test('getCoinCombination should handle only dimes and smaller', () => {
    expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
    expect(getCoinCombination(20)).toEqual([0, 0, 2, 0]);
});

test('getCoinCombination should handle only nickels and smaller', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
    expect(getCoinCombination(15)).toEqual([0, 1, 1, 0]);
});

test('getCoinCombination should handle complex combinations', () => {
    expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
    expect(getCoinCombination(58)).toEqual([3, 1, 0, 2]);
});

test('getCoinCombination should return the smallest number of coins', () => {
    const result = getCoinCombination(99);
    const totalCoins = result.reduce((sum, count) => sum + count, 0);
    expect(totalCoins).toBe(9);
});
