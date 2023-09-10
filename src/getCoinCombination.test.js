'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  describe('Currancy calculator', () => {
    it('should return [0, 0, 0, 0] for 0 cents', () => {
      expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
    });

    it(`should return [1, 0, 0, 0] for 1 cents`, () => {
      expect(getCoinCombination(1))
        .toEqual([1, 0, 0, 0]);
    });

    it('should return [0, 1, 0, 0] for 5 cents', () => {
      expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
    });

    it(`should return [1, 1, 0, 0] for 6 cents`, () => {
      expect(getCoinCombination(6))
        .toEqual([1, 1, 0, 0]);
    });

    it(`should return [2, 1, 0, 0] for 7 cents`, () => {
      expect(getCoinCombination(7))
        .toEqual([2, 1, 0, 0]);
    });

    it('should return [3, 1, 0, 0] for 8 cents', () => {
      expect(getCoinCombination(8)).toEqual([3, 1, 0, 0]);
    });

    it(`should return [2, 1, 1, 0] for 17 cents`, () => {
      expect(getCoinCombination(17))
        .toEqual([2, 1, 1, 0]);
    });

    it('should return [0, 0, 0, 1] for 25 cents', () => {
      expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
    });

    it('should return [1, 0, 0, 1] for 26 cents', () => {
      expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
    });

    it(`should return [0, 0, 0, 2] for 50 cents`, () => {
      expect(getCoinCombination(50))
        .toEqual([0, 0, 0, 2]);
    });

    it(`should return [0, 1, 2, 3] for 99 cents`, () => {
      expect(getCoinCombination(99))
        .toEqual([4, 0, 2, 3]);
    });
  });

  describe('To be truthy', () => {
    it(`Check if the result is truthy`, () => {
      expect(getCoinCombination())
        .toBeTruthy();
    });
  });
});
