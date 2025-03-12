'use strict';

describe('getCoinCombination', () => {
  // eslint-disable-next-line max-len
  const { getCoinCombination } = require('./getCoinCombination'); // Імпорт функції з вашого файлу

  // Перевірка, чи функція оголошена
  it('should be declared', () => {
    expect(getCoinCombination).toBeInstanceOf(Function);
  });

  // Тест 1: Перевірка для 1 цента
  it('повертає [1, 0, 0, 0] для 1 цента', () => {
    expect(getCoinCombination(1)).toEqual([1, 0, 0, 0]);
  });

  // Тест 2: Перевірка для 6 центів
  it('повертає [1, 1, 0, 0] для 6 центів', () => {
    expect(getCoinCombination(6)).toEqual([1, 1, 0, 0]);
  });

  // Тест 3: Перевірка для 17 центів
  it('повертає [2, 1, 1, 0] для 17 центів', () => {
    expect(getCoinCombination(17)).toEqual([2, 1, 1, 0]);
  });

  // Тест 4: Перевірка для 50 центів
  it('повертає [0, 0, 0, 2] для 50 центів', () => {
    expect(getCoinCombination(50)).toEqual([0, 0, 0, 2]);
  });

  // Тест 5: Перевірка для 0 центів
  it('повертає [0, 0, 0, 0] для 0 центів', () => {
    expect(getCoinCombination(0)).toEqual([0, 0, 0, 0]);
  });

  // Тест 6: Перевірка для складного випадку, наприклад, 93 центи
  it('повертає [3, 1, 1, 3] для 93 центів', () => {
    // 3 кварти (75) + 1 дайм (10) + 1 нікель (5) + 3 пенні (3) = 93
    expect(getCoinCombination(93)).toEqual([3, 1, 1, 3]);
  });

  // Тест 7: Перевірка для 100 центів
  it('повертає [0, 0, 0, 4] для 100 центів', () => {
    expect(getCoinCombination(100)).toEqual([0, 0, 0, 4]);
  });
});
