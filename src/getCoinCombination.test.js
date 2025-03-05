'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should get rezult with static length', () => {
    const result = getCoinCombination(55);

    expect(result).toHaveLength(4);
  });

  it('should floor input cents', () => {
    const result = getCoinCombination(1.9);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  it('if 0 return array with all 0', () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it('should use only pennies', () => {
    const result = getCoinCombination(4);

    expect(result).toEqual([4, 0, 0, 0]);
  });

  it('should use only nickels', () => {
    const result = getCoinCombination(5);

    expect(result).toEqual([0, 1, 0, 0]);
  });

  it('should use only dimes', () => {
    const result = getCoinCombination(20);

    expect(result).toEqual([0, 0, 2, 0]);
  });

  it('should use only quarters', () => {
    const result = getCoinCombination(25);

    expect(result).toEqual([0, 0, 0, 1]);
  });

  it('if have all coins nominals', () => {
    const result = getCoinCombination(41);

    expect(result).toEqual([1, 1, 1, 1]);
  });

  it('if 100 < cents', () => {
    const result = getCoinCombination(167);

    expect(result).toEqual([2, 1, 1, 6]);
  });
});
