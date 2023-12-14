'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it(`returns nickels for 0 < cents <= 5`, () => {
    const result = getCoinCombination(1);

    expect(result).toStrictEqual([1, 0, 0, 0]);
  });

  it(`returns nickels and pennies for 5 < cents < 10`, () => {
    const result = getCoinCombination(6);

    expect(result).toStrictEqual([1, 1, 0, 0]);
  });

  it(`returns nickels, pennies and dimes for 10 <= cents <= 25`, () => {
    const result = getCoinCombination(17);

    expect(result).toStrictEqual([2, 1, 1, 0]);
  });

  it(`returns nickels, pennies, dimes and quarters 25 <= cents`, () => {
    const result = getCoinCombination(50);

    expect(result).toStrictEqual([0, 0, 0, 2]);
  });

  it(`should return 'please enter a number' if typeof cents === NaN`, () => {
    const result = getCoinCombination('foo');

    expect(result).toStrictEqual('please enter a number');
  });

  it(`should return [0, 0, 0, 0] if typeof cents <= 0`, () => {
    const result = getCoinCombination(-50);

    expect(result).toStrictEqual([0, 0, 0, 0]);
  });

  it(`should return [0, 0, 0, 0] without cents`, () => {
    const result = getCoinCombination();

    expect(result).toStrictEqual([0, 0, 0, 0]);
  });
});
