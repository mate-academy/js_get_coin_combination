'use strict';

const { getCoinCombination } = require('./getCoinCombination');

describe('getCoinCombination', () => {
  describe('Basic Cases', () => {
    it('should return [0, 0, 0, 0] // 0 cents', () => {
      expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
    });

    it('should return [1, 0, 0, 0] // 1 penny', () => {
      expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
    });

    it('should return [0, 1, 0, 0] // 5 cents', () => {
      expect(getCoinCombination(5)).toEqual([0, 1, 0, 0]);
    });

    it('should return [1, 1, 0, 0] // 6 cents', () => {
      expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
    });

    it('should return [2, 1, 1, 0] // 17 cents', () => {
      expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
    });

    it('should return [0, 0, 0, 1] // 25 cents', () => {
      expect(getCoinCombination(25)).toEqual([0, 0, 0, 1]);
    });

    it('should return [0, 0, 0, 2] // 50 cents', () => {
      expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
    });

    it('should return [4, 0, 2, 3] // 99 cents', () => {
      expect(getCoinCombination(99)).toEqual([4, 0, 2, 3]);
    });

    it('should return [3, 0, 2, 4] // 123 cents', () => {
      expect(getCoinCombination(123)).toEqual([3, 0, 2, 4]);
    });

    it('should return [0, 0, 0, 12] // 300 cents', () => {
      expect(getCoinCombination(300)).toEqual([0, 0, 0, 12]);
    });
  });

  describe('Large Amounts', () => {
    it('should return [4, 0, 2, 39] // 999 cents', () => {
      expect(getCoinCombination(999)).toEqual([4, 0, 2, 39]);
    });

    it('should return [0, 0, 0, 40] // 1000 cents', () => {
      expect(getCoinCombination(1000)).toEqual([0, 0, 0, 40]);
    });

    it('should return [0, 0, 2, 493] // 12345 cents', () => {
      expect(getCoinCombination(12345)).toEqual([0, 0, 2, 493]);
    });
  });

  describe('Edge Cases', () => {
    it('should return [3, 0, 0, 0] // 3 cents', () => {
      expect(getCoinCombination(3)).toEqual([3, 0, 0, 0]);
    });

    it('should return [0, 0, 2, 0] // 20 cents', () => {
      expect(getCoinCombination(20)).toEqual([0, 0, 2, 0]);
    });

    it('should return [0, 0, 2, 3] // 95 cents', () => {
      expect(getCoinCombination(95)).toEqual([0, 0, 2, 3]);
    });
  });
});
