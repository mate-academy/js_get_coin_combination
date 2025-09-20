'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`if amount >= 1 and =< 4,
     result should be from 1 to 4 on 'coins[0]'`, () => {
    const result = getCoinCombination(3);

    expect(result).toStrictEqual([3, 0, 0, 0]);
  });

  it(`if amount === 5 should return 1 on 'coins[1]'`, () => {
    const result = getCoinCombination(5);

    expect(result).toStrictEqual([0, 1, 0, 0]);
  });

  it(`if amount > 5 and < 10 result should be on 'coins[1]'
     with rest on 'coins[0]'`, () => {
    const result = getCoinCombination(8);

    expect(result).toStrictEqual([3, 1, 0, 0]);
  });

  it(`if amount === 10 should return 1 on 'coins[2]'`, () => {
    const result = getCoinCombination(10);

    expect(result).toStrictEqual([0, 0, 1, 0]);
  });

  it(`if amount > 10 and < 25 result should be on 'coins[2]'
     with rest on 'coins[1]' or 'coins[0]'`, () => {
    const result = getCoinCombination(19);

    expect(result).toStrictEqual([4, 1, 1, 0]);
  });

  it(`if amount === 25 should return 1 on 'coins[3]'`, () => {
    const result = getCoinCombination(25);

    expect(result).toStrictEqual([0, 0, 0, 1]);
  });

  it(`if amount > 25 result should be on 'coins[3]' with rest on
     'coins[2]', 'coins[1]' or 'coins[0]'`, () => {
    const result = getCoinCombination(99);

    expect(result).toStrictEqual([4, 0, 2, 3]);
  });

  it('should return array with four zeros for zero number', () => {
    const result = getCoinCombination(0);

    expect(result).toStrictEqual([0, 0, 0, 0]);
  });
});
