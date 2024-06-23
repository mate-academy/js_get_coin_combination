'use strict';

describe('getCoinCombination', () => {
  const { getCoinCombination } = require('./getCoinCombination');

  it(`should be declared`, () => {
    expect(getCoinCombination)
      .toBeInstanceOf(Function);
  });

  it('should return coins if a values([1, 1, 0, 0])', () => {
    expect(getCoinCombination(6));
  });

  it('should return coins if a values([2, 1, 1, 0])', () => {
    expect(getCoinCombination(17));
  });

  it('should return coins if a values([0, 0, 0, 2])', () => {
    expect(getCoinCombination(50));
  });

  it('should return coins if a values([1, 0, 0, 0])', () => {
    expect(getCoinCombination(1));
  });
});
