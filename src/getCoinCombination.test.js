'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it('should be declared', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  it('should return [0, 0, 0, 0] if cents === 0', () => {
    const res = getCoinCombination(0);

    expect(res).toStrictEqual([0, 0, 0, 0]);
  });

  it('should return [2, 0, 0, 0] if cents is less than 5', () => {
    const res = getCoinCombination(2);

    expect(res).toStrictEqual([2, 0, 0, 0]);
  });

  it('should return [2, 1, 0, 0] for cents equal to 7', () => {
    const res = getCoinCombination(7);

    expect(res).toStrictEqual([2, 1, 0, 0]);
  });

  it('should return [1, 1, 1, 0] for cents equal to 16', () => {
    const res = getCoinCombination(16);

    expect(res).toStrictEqual([1, 1, 1, 0]);
  });

  it('should return [3, 1, 0, 2] for cents equal to 58', () => {
    const res = getCoinCombination(58);

    expect(res).toStrictEqual([3, 1, 0, 2]);
  });
  
  it('should return [0, 0, 0, 1] for cents equal to 25', () => {
    const res = getCoinCombination(25);

    expect(res).toStrictEqual([0, 0, 0, 1]);
  });
  
  it('should return [0, 0, 1, 0] for cents equal to 10', () => {
    const res = getCoinCombination(10);

    expect(res).toStrictEqual([0, 0, 1, 0]);
  });
  
  it('should return [4, 0, 0, 0] for cents equal to 29', () => {
    const res = getCoinCombination(29);

    expect(res).toStrictEqual([4, 0, 0, 1]);
  });
  
  it('should return [0, 1, 0, 2] for cents equal to 55', () => {
    const res = getCoinCombination(55);

    expect(res).toStrictEqual([0, 1, 0, 2]);
  });
});
