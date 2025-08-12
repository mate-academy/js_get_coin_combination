'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('0 cent', () => {
    const coins = getCoinCombination(0);

    expect(coins).toStrictEqual([0, 0, 0, 0]);
  });

  test('1 cent', () => {
    const coins = getCoinCombination(1);

    expect(coins).toStrictEqual([1, 0, 0, 0]);
  });

  test('2 cents', () => {
    const coins = getCoinCombination(2);

    expect(coins).toStrictEqual([2, 0, 0, 0]);
  });

  test('4 cents', () => {
    const coins = getCoinCombination(4);

    expect(coins).toStrictEqual([4, 0, 0, 0]);
  });

  test('5 cents', () => {
    const coins = getCoinCombination(5);

    expect(coins).toStrictEqual([0, 1, 0, 0]);
  });

  test('6 cents', () => {
    const coins = getCoinCombination(6);

    expect(coins).toStrictEqual([1, 1, 0, 0]);
  });

  test('9 cents', () => {
    const coins = getCoinCombination(9);

    expect(coins).toStrictEqual([4, 1, 0, 0]);
  });

  test('10 cents', () => {
    const coins = getCoinCombination(10);

    expect(coins).toStrictEqual([0, 0, 1, 0]);
  });

  test('11 cents', () => {
    const coins = getCoinCombination(11);

    expect(coins).toStrictEqual([1, 0, 1, 0]);
  });

  test('24 cents', () => {
    const coins = getCoinCombination(24);

    expect(coins).toStrictEqual([4, 0, 2, 0]);
  });

  test('25 cents', () => {
    const coins = getCoinCombination(25);

    expect(coins).toStrictEqual([0, 0, 0, 1]);
  });

  test('26 cents', () => {
    const coins = getCoinCombination(26);

    expect(coins).toStrictEqual([1, 0, 0, 1]);
  });

  test('167 cents', () => {
    const coins = getCoinCombination(167);

    expect(coins).toStrictEqual([2, 1, 1, 6]);
  });
});
