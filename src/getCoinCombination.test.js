'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return zeros for 0 cents', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  it('should return an arry [1,0,0,1] for 26 cents', () => {
    expect(getCoinCombination(26)).toEqual([1, 0, 0, 1]);
  });

  it('should return an arry [0,1,1,0] for 15 cents', () => {
    expect(getCoinCombination(16)).toEqual([1, 1, 1, 0]);
  });

  it('should return an array [1,1,1,1] for 41 cents', () => {
    expect(getCoinCombination(41)).toEqual([1, 1, 1, 1]);
  });

  it('should return [NaN,NaN,NaN,NaN] for 26 cents as type of string',
    () => {
      expect(getCoinCombination('26')).toEqual([NaN, NaN, NaN, NaN]);
    });

  it('should return array of NaN when input is undefined', () => {
    const result = getCoinCombination(undefined);

    result.forEach(value => expect(value).toBeNaN());
  });

  it('should return [NaN,NaN,NaN,NaN] for null cents as type of argument',
    () => {
      expect(getCoinCombination(null)).toEqual([NaN, NaN, NaN, NaN]);
    });

  it('should return [NaN,NaN,NaN,NaN] for null cents as type of argument',
    () => {
      expect(getCoinCombination(null)).toEqual([NaN, NaN, NaN, NaN]);
    });

  it('should return [NaN,NaN,NaN,NaN] for 26 cents in string', () => {
    expect(getCoinCombination('26')).toEqual([1, 0, 0, 1]);
  });

  test('MAX_SAFE_INTEGER', () => {
    const max = Number.MAX_SAFE_INTEGER;
    const coins = getCoinCombination(max);
    const values = [1, 5, 10, 25];
    const total = coins.reduce((sum, count, i) => sum + count * values[i], 0);

    expect(total).toBe(max);
  });

  test('MIN_SAFE_INTEGER (0 expected if negative not handled)', () => {
    const min = Number.MIN_SAFE_INTEGER;
    const coins = getCoinCombination(min);

    expect(coins.reduce((sum, count, i) =>
      sum + count * [1, 5, 10, 25][i], 0)).toBe(min);
  });
});

describe('test more inputs', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  test('multiple arguments - default behaviour', () => {
    const result = getCoinCombination(3, 4);

    expect(result).toEqual(getCoinCombination(3));
  });

  test("input '3,4' as two arguments", () => {
    const result = getCoinCombination(3, 4);

    expect(result).toEqual(getCoinCombination(3));
  });

  test('single integer works', () => {
    expect(getCoinCombination(7)).toEqual([2, 1, 0, 0]);
  });
});
