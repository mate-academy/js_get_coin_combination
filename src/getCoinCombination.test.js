'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return the array of 0s if the parameter given is 0`, () => {
    let result = getCoinCombination(0);
    expect(result).toEqual([0, 0, 0, 0])
  });

  it(`expects to provide the combination with the smallest amount of coins`, () => {
    let result = getCoinCombination(20);
    expect(result).toEqual([0, 0, 2, 0])
  });

  it(`should throw an error when the parameter is negative`, () => {
    expect(() => getCoinCombination(-2)).toThrow();
  })

  it('should return a coin combination whose total value equals the parameter amount', () => {
    const result = getCoinCombination(14);
    const values = [1, 5, 10, 25];
    const total = result.reduce((sum, count, index) => sum + count * values[index], 0);
    expect(total).toBe(14);
  });
});
