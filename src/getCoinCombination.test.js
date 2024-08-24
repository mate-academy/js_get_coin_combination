'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return array`, () => {
    expect(getCoinCombination(2)).toBeInstanceOf(Array);
  });

  it(`values should be integers`, () => {
    const result = getCoinCombination(17);

    expect(result[0]).toBe(2);
  });

  it(`should return numbers`, () => {
    const result = getCoinCombination(17);

    expect(typeof result[0]).toBe('number');
  });

  it(`should corretcly count 'cents'`, () => {
    const result = getCoinCombination(17);

    expect(result).toEqual([2, 1, 1, 0]);
  });

  it(`should correctly count large 'cents'`, () => {
    const result = getCoinCombination(50);

    expect(result).toEqual([0, 0, 0, 2]);
  });

  it(`should correctly count large 'cents'`, () => {
    const result = getCoinCombination(51);

    expect(result).toEqual([1, 0, 0, 2]);
  });

  it(`should return array of length = 4`, () => {
    const result = getCoinCombination(51);

    expect(result).toHaveLength(4);
  });
});
