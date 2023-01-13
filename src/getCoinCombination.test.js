'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test('should return a array', () => {
    const coins = getCoinCombination();

    expect(coins)
      .toBeInstanceOf(Array);
  });

  test('should return [0, 0, 0, 0] if arguments equel 0', () => {
    const coins = getCoinCombination(0);

    expect(coins)
      .toEqual([0, 0, 0, 0]);
  });

  test('should return [1, 0, 0, 0] if arguments equel 1', () => {
    const coins = getCoinCombination(1);

    expect(coins)
      .toEqual([1, 0, 0, 0]);
  });

  test('should return [0, 1, 0, 0] if arguments equel 5', () => {
    const coins = getCoinCombination(5);

    expect(coins)
      .toEqual([0, 1, 0, 0]);
  });

  test('should return [0, 0, 1, 0] if arguments equel 10', () => {
    const coins = getCoinCombination(10);

    expect(coins)
      .toEqual([0, 0, 1, 0]);
  });

  test('should return [0, 0, 0, 1] if arguments equel 50', () => {
    const coins = getCoinCombination(25);

    expect(coins)
      .toEqual([0, 0, 0, 1]);
  });

  test('should return [1, 0, 2, 2] if arguments equel 71', () => {
    const coins = getCoinCombination(71);

    expect(coins)
      .toEqual([1, 0, 2, 2]);
  });
});
