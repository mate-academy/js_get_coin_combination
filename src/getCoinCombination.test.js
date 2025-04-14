'use strict';

const { getCoinCombination } = require('./getCoinCombination');

// describe('getCoinCombination', () => {
//   const { getCoinCombination } = require('./getCoinCombination');

it(`should be declared`, () => {
  expect(getCoinCombination).toBeInstanceOf(Function);
});
// });

test(`should split cents into equal number of coins
  if cents amount is divisible by the sum of coins values`, () => {
  const coins = getCoinCombination(41);

  expect(coins).toEqual([1, 1, 1, 1]);
});

test(`should stick to the coins values
  ascending order if they are not equal`, () => {
  const coins = getCoinCombination(143);

  expect(coins).toEqual([3, 1, 1, 5]);
});

test(`should add zeros if coin is not needed for cents amount`, () => {
  const coins = getCoinCombination(4);

  expect(coins).toEqual([4, 0, 0, 0]);
});
