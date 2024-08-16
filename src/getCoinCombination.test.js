'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should work with string values', () => {
    expect(getCoinCombination('100'))
      .toEqual([0, 0, 0, 4]);
  });

  it('should return NaN for incorrect values', () => {
    expect(getCoinCombination('a'))
      .toEqual([NaN, NaN, NaN, NaN]);
  });

  it('should return correct number of coins', () => {
    expect(getCoinCombination(41))
      .toEqual([1, 1, 1, 1]);
  });

  describe('edge value testing', () => {
    it('should return 0 for 0 cents', () => {
      expect(getCoinCombination(0))
        .toEqual([0, 0, 0, 0]);
    });

    it('should return 4 penny for 4 cents', () => {
      expect(getCoinCombination(4))
        .toEqual([4, 0, 0, 0]);
    });

    it('should return 1 nickel for 5 cents', () => {
      expect(getCoinCombination(5))
        .toEqual([0, 1, 0, 0]);
    });

    it('should return 1 penny and 1 nickel for 6 cents', () => {
      expect(getCoinCombination(6))
        .toEqual([1, 1, 0, 0]);
    });

    it('should return 1 nickel and 4 penny for 10 cents', () => {
      expect(getCoinCombination(9))
        .toEqual([4, 1, 0, 0]);
    });

    it('should return 1 dime for 10 cents', () => {
      expect(getCoinCombination(10))
        .toEqual([0, 0, 1, 0]);
    });

    it('should return 1 dime and 1 penny for 11 cents', () => {
      expect(getCoinCombination(11))
        .toEqual([1, 0, 1, 0]);
    });

    it('should return 2 nickel and 4 penny for 24 cents', () => {
      expect(getCoinCombination(24))
        .toEqual([4, 0, 2, 0]);
    });

    it('should return 1 quarter for 25 cents', () => {
      expect(getCoinCombination(25))
        .toEqual([0, 0, 0, 1]);
    });

    it('should return 1 quarter and 1 penny for 26 cents', () => {
      expect(getCoinCombination(26))
        .toEqual([1, 0, 0, 1]);
    });
  });
});
