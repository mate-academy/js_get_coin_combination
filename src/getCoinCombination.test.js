'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('should be declared', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  test('should return correct coin combination', () => {
    expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
  });

  test('should return correct coin combination', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  test('should return correct coin combination', () => {
    expect(getCoinCombination(7)).toEqual([2, 1, 0, 0]);
  });

  test('should return correct coin combination', () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  test('should return correct coin combination', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  test('should return correct coin combination', () => {
    expect(getCoinCombination(18)).toEqual([3, 1, 1, 0]);
  });

  test('should return correct coin combination', () => {
    expect(getCoinCombination(49)).toEqual([4, 0, 2, 1]);
  });

  test('should return correct coin combination', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  test('should return correct coin combination', () => {
    expect(getCoinCombination(51)).toEqual([1, 0, 0, 2]);
  });
});
