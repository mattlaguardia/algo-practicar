const minimumCoinChange = (coins, amount) => {
  const cache = {};

  const minCoinHelper = (amount) => {
    if (amount === 0) { return 0 };
    if (!!cache[amount]) { return cache[amount] };

    let min_coins = Infinity;

    coins.map(coin => {
      if (coin <= amount) {
        let tempCoins = minCoinHelper(amount - coin);
        min_coins = Math.min(tempCoins, min_coins);
      }
    })

    cache[amount] = min_coins + 1;
    return cache[amount];
  }

  return minCoinHelper(amount);
}

console.log(minimumCoinChange([1,2,5], 11));
console.log(minimumCoinChange([2], 3));

module.exports = minimumCoinChange;
