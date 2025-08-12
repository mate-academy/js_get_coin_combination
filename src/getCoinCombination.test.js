'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return zero if recived zero arguments', () => {
    const result = getCoinCombination(0);

    expect(result).toEqual([0, 0, 0, 0]);
  });

  it('should return 1 cent if recived one value', () => {
    const result = getCoinCombination(1);

    expect(result).toEqual([1, 0, 0, 0]);
  });

  it('should use a nickel if arguments bigger than 5', () => {
    const result = getCoinCombination(6);

    expect(result).toEqual([1, 1, 0, 0]);
  });

  it('shuold use a dimes if argumrents bigger then 15', () => {
    const result = getCoinCombination(16);

    expect(result).toEqual([1, 1, 1, 0]);
  });

  it('shuold use a quarters', () => {
    const result = getCoinCombination(50);

    expect(result).toEqual([0, 0, 0, 2]);
  });
});
