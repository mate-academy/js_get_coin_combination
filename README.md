Write a tests for function `getCoinCombination` that accepts a non-negative integer `cents` representing the amount of cents and returns the minimum number of coins combination of the same value.

The function returns an array where:
coins[0] = number of pennies (1 penny = 1 cent)  
coins[1] = number of nickels (1 nickel = 5 cents)  
coins[2] = number of dimes (1 dime = 10 cents)  
coins[3] = number of quarters (1 quarter = 25 cents)  

Examples:
```js
getCoinCombination(1) = [1, 0, 0, 0] // 1 penny
getCoinCombination(6) = [1, 1, 0, 0] // 1 penny + 1 nickel
getCoinCombination(17) = [2, 1, 1, 0] // 2 pennies + 1 nickel + 1 dime
getCoinCombination(50) = [0, 0, 0, 2] // 2 quarters
```

[Guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md)

Read more about [Jest expectations](https://jestjs.io/uk/docs/expect)