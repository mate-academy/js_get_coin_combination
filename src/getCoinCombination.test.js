'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('the result is array of 0 when "cents" === 0', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('the result is array of 0 when "cents" < 0', () => {
    expect(getCoinCombination(-Infinity)).toEqual([0, 0, 0, 0]);
  });

  it('should correctly distribute money when "cents" === 9', () => {
    expect(getCoinCombination(9)).toEqual([4, 1, 0, 0]);
  });

  it('should correctly distribute money when "cents" === 116', () => {
    expect(getCoinCombination(116)).toEqual([1, 1, 1, 4]);
  });

  it('"cents" should be a finite number', () => {
    expect(() => getCoinCombination(Infinity)).toThrow();
  });
});
