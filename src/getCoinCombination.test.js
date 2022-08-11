'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return array', () => {
    expect(getCoinCombination(0)).toBeInstanceOf(Array);
  });

  it(`should return NaN when input is not digit`, () => {
    expect(getCoinCombination('qwerty'))
      .toEqual([NaN, NaN, NaN, NaN]);
  });

  it('should return [2, 0, 0, 1] if input 27', () => {
    expect(getCoinCombination(27)).toEqual([2, 0, 0, 1]);
  });

  it('should return [2, 1, 0, 0] if input 7', () => {
    expect(getCoinCombination(7)).toEqual([2, 1, 0, 0]);
  });

  it('should return [0, 1, 1, 0] if input 15', () => {
    expect(getCoinCombination(15)).toEqual([0, 1, 1, 0]);
  });

  it('should return [4, 0, 0, 0] if input 4', () => {
    expect(getCoinCombination(4)).toEqual([4, 0, 0, 0]);
  });

  it('should return [4, 1, 1, 1] if input 49', () => {
    expect(getCoinCombination(49)).toEqual([4, 0, 2, 1]);
  });
});
