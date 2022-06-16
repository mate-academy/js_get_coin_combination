'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  test(`should return text: *Only positive numbers!* if input is -1`, () => {
    expect(getCoinCombination(-1))
      .toEqual('Only positive numbers!');
  })

  test(`should return [0, 0, 0, 0] if input is 0`, () => {
    expect(getCoinCombination(0))
      .toEqual([0, 0, 0, 0]);
  })

  test(`should return [1, 0, 0, 0] if input is 1`, () => {
    expect(getCoinCombination(1))
      .toEqual([1, 0, 0, 0]);
  })

  test(`should return [0, 1, 0, 0] if input is 5`, () => {
    expect(getCoinCombination(5))
      .toEqual([0, 1, 0, 0]);
  })

  test(`should return [0, 0, 1, 0] if input is 10`, () => {
    expect(getCoinCombination(10))
      .toEqual([0, 0, 1, 0]);
  })

  test(`should return [0, 0, 0, 1] if input is 25`, () => {
    expect(getCoinCombination(25))
      .toEqual([0, 0, 0, 1]);
  })

  test(`should return [1, 0, 0, 1] if input is 26`, () => {
    expect(getCoinCombination(26))
      .toEqual([1, 0, 0, 1]);
  })

  test(`should return [0, 1, 0, 1] if input is 30`, () => {
    expect(getCoinCombination(30))
      .toEqual([0, 1, 0, 1]);
  })

  test(`should return [1, 1, 0, 1] if input is 31`, () => {
    expect(getCoinCombination(31))
      .toEqual([1, 1, 0, 1]);
  })

  test(`should return [0, 0, 1, 1] if input is 35`, () => {
    expect(getCoinCombination(35))
      .toEqual([0, 0, 1, 1]);
  })

  test(`should return [1, 0, 1, 1] if input is 36`, () => {
    expect(getCoinCombination(36))
      .toEqual([1, 0, 1, 1]);
  })

  test(`should return [0, 1, 1, 1] if input is 40`, () => {
    expect(getCoinCombination(40))
      .toEqual([0, 1, 1, 1]);
  })

  test(`should return [1, 1, 1, 1] if input is 41`, () => {
    expect(getCoinCombination(41))
      .toEqual([1, 1, 1, 1]);
  })

  test(`should return [0, 0, 2, 1] if input is 45`, () => {
    expect(getCoinCombination(45))
      .toEqual([0, 0, 2, 1]);
  })

  test(`should return [0, 0, 0, 2] if input is 50`, () => {
    expect(getCoinCombination(50))
      .toEqual([0, 0, 0, 2]);
  })

  test(`should return [1, 0, 0, 2] if input is 51`, () => {
    expect(getCoinCombination(51))
      .toEqual([1, 0, 0, 2]);
  })
});
