'use strict';

describe(`'getCoinCombination' function`, () => {
  const { getCoinCombination } = require('./getCoinCombination');

  // Equivalence class tests block:
  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it(`should return an Array`, () => {
    expect(getCoinCombination())
      .toBeInstanceOf(Array);
  });

  it(`returns array with zeros, if input is 0`, () => {
    const answer = getCoinCombination(0);

    expect(answer)
      .toEqual([0, 0, 0, 0]);
  });

  it(`returns a 'penny', if input is 1`, () => {
    const answer = getCoinCombination(1);

    expect(answer)
      .toEqual([1, 0, 0, 0]);
  });

  it(`returns a 'nickel', if input is 5`, () => {
    const answer = getCoinCombination(5);

    expect(answer)
      .toEqual([0, 1, 0, 0]);
  });

  it(`returns a 'dime', if input is 10`, () => {
    const answer = getCoinCombination(10);

    expect(answer)
      .toEqual([0, 0, 1, 0]);
  });

  it(`returns a 'quarter', if input is 25`, () => {
    const answer = getCoinCombination(25);

    expect(answer)
      .toEqual([0, 0, 0, 1]);
  });
  
  // Boundary value test block:
  it(`returns 4 'penny', if input is 4`, () => {
    const answer = getCoinCombination(4);

    expect(answer)
      .toEqual([4, 0, 0, 0]);
  });

  it(`returns a 'nickel' and a 'penny', if input is 6`, () => {
    const answer = getCoinCombination(6);

    expect(answer)
      .toEqual([1, 1, 0, 0]);
  });
  
  it(`returns a 'nickel' and 4 'penny', if input is 9`, () => {
    const answer = getCoinCombination(9);

    expect(answer)
      .toEqual([4, 1, 0, 0]);
  });
  
  it(`returns a 'dime' and 1 'penny', if input is 11`, () => {
    const answer = getCoinCombination(11);

    expect(answer)
      .toEqual([1, 0, 1, 0]);
  });
  
  it(`returns two 'nickels' and 4 'penny', if input is 24`, () => {
    const answer = getCoinCombination(24);

    expect(answer)
      .toEqual([4, 0, 2, 0]);
  });

  it(`returns a 'quarter' and a 'penny', if input is 26`, () => {
    const answer = getCoinCombination(26);

    expect(answer)
      .toEqual([1, 0, 0, 1]);
  });

  // NaN scenario block:
  it(`returns Array with NaN\`s, if input is NaN`, () => {
    const answer = getCoinCombination(NaN);

    expect(answer)
      .toEqual([NaN, NaN, NaN, NaN]);
  });

  it(`returns Array with NaN\`s, if no arguments given`, () => {
    const answer = getCoinCombination();

    expect(answer)
      .toEqual([NaN, NaN, NaN, NaN]);
  });
});