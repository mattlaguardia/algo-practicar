const minimumCoinChange = require('./minimum-coin-change.matt');

test('fewest number of coins with coins being [1, 2, 5] and amount 11', () => {
  expect(minimumCoinChange([1,2,5], 11)).toBe(3);
});

test('fewest number of coins with coins being [2] and amount 3', () => {
  expect(minimumCoinChange([2], 3)).toBe(-1);
});
