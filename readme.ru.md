# QA Coin combination
Напиши тесты для функции `getCoinCombination`, которая принимает неотрицательное
целое число `cents` (определённая сумма в центах) и возвращает комбинацию,
состоящую из минимально возможного количества монет, дающую ту же сумму.

Функция должна вернуть массив `coins`, где:
- `coins[0]` = количество пенни (1 пенни = 1 цент);
- `coins[1]` = количество никелей (1 никель = 5 центов);
- `coins[2]` = количество даймов (1 дайм = 10 центов);
- `coins[3]` = количество четвертаков (1 четвертак = 25 центов).



Примеры:
```js
getCoinCombination(1) === [1, 0, 0, 0] // 1 пенни
getCoinCombination(6) === [1, 1, 0, 0] // 1 пенни + 1 никель
getCoinCombination(17) === [2, 1, 1, 0] // 2 пенни + 1 никель + 1 дайм
getCoinCombination(50) === [0, 0, 0, 2] // 2 четвертака
```

[Guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md)

Read more about [Jest expectations](https://jestjs.io/uk/docs/expect)
