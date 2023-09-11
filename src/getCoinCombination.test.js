'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  describe('Currency calculator', () => {
    it('should return [0, 0, 0, 0] for 0 cents', () => {
      expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
    });

    it(`should return [1, 0, 0, 0] for 1 cent`, () => {
      expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    });

    it(`should return [2, 0, 0, 0] for 1 cent`, () => {
      expect(getCoinCombination(2)).toEqual([2, 0, 0, 0]);
    });

    it('should return [4, 0, 0, 0] for 4 cents', () => {
      expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
    });

    it('should return [0, 1, 0, 0] for 5 cents', () => {
      expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
    });

    it('should return [4, 1, 0, 0] for 10 cents', () => {
      expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
    });

    it('should return [0, 0, 1, 0] for 10 cents', () => {
      expect(getCoinCombination(10)).toEqual([0, 0, 1, 0]);
    });

    it(`should return [4, 0, 2, 0] for 25 cents`, () => {
      expect(getCoinCombination(24)).toEqual([4, 0, 2, 0]);
    });

    it(`should return [0, 0, 0, 1] for 25 cents`, () => {
      expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
    });

    it(`should return [1, 1, 1, 1] for 41 cents`, () => {
      expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
    });

    it('should return [2, 1, 1, 0] for 26 cents', () => {
      expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
    });

    it(`should return [4, 0, 2, 1] for 49 cents`, () => {
      expect(getCoinCombination(49)).toEqual([4, 0, 2, 1]);
    });

    it(`should return [0, 0, 0, 2] for 50 cents`, () => {
      expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
    });

    it('should return [4, 0, 2, 3] for 99 cents', () => {
      expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
    });

    it('should return [4, 0, 0, 2] for 102 cents', () => {
      expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
    });
  });

  describe('To be truthy', () => {
    it(`Check if the result is truthy`, () => {
      expect(getCoinCombination()).toBeTruthy();
    });
  });
});
