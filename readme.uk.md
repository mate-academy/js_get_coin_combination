# QA Coin combination

Напиши тести для функції `getCoinCombination`, яка приймає невід'ємне ціле число
`cents` (певна сума в центах) і повертає комбінацію, що складається з найменшої
можливої кількості монет, на цю ж суму.

Функція повинна повернути масив `coins`, де:

- `coins[0]` = кількість пенні (1 пенні = 1 цент);
- `coins[1]` = кількість нікелей (1 нікель = 5 центів);
- `coins[2]` = кількість даймів (1 дайм = 10 центів);
- `coins[3]` = кількість четвертаків (1 четвертак = 25 центів).

Приклади:

```js
getCoinCombination(1) === [1, 0, 0, 0] // 1 пенні
getCoinCombination(6) === [1, 1, 0, 0] // 1 пенні + 1 нікель
getCoinCombination(17) === [2, 1, 1, 0] // 2 пенні + 1 нікель + 1 дайм
getCoinCombination(50) === [0, 0, 0, 2] // 2 четвертаки
```

[Guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md)

Read more about [Jest expectations](https://jestjs.io/uk/docs/expect).
