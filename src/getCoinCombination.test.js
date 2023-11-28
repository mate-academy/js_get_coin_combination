'use strict';

const getCoinCombination = require('./getCoinCombination');

expect(getCoinCombination).toBeInstanceOf(Function);

it('should return [1, 0, 0, 0] for 1 cent', () => {
  const result = getCoinCombination(1);

  expect(result).toEqual([1, 0, 0, 0]);
});

it('should return [1, 1, 0, 0] for 6 cents', () => {
  const result = getCoinCombination(6);

  expect(result).toEqual([1, 1, 0, 0]);
});

it('should return [2, 1, 1, 0] for 17 cents', () => {
  const result = getCoinCombination(17);

  expect(result).toEqual([2, 1, 1, 0]);
});

it('should return [0, 0, 0, 2] for 50 cents', () => {
  const result = getCoinCombination(50);

  expect(result).toEqual([0, 0, 0, 2]);
});

it('should return [0, 0, 0, 0] for 0 cents', () => {
  const result = getCoinCombination(0);

  expect(result).toEqual([0, 0, 0, 0]);
});

it('should throw an error for negative numbers', () => {
  expect(() => getCoinCombination(-1)).toThrow(Error);
});

it('should throw an error for float numbers', () => {
  expect(() => getCoinCombination(1.5)).toThrow(Error);
});

it('should throw an error for strings', () => {
  expect(() => getCoinCombination('hello')).toThrow(Error);
});
