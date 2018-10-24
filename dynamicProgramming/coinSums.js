//CoinSums like
//Return the possible number of ways someone could make change for a given Pence.
function coinSums(total, coins = [1, 2, 5, 10, 20, 50, 100, 200]) {
  const combinations = [1];
  for (let coin of coins) {
    for (let runningTotal = 0; runningTotal <= total; runningTotal++) {
      if (combinations[runningTotal] === undefined) {
        if (runningTotal % coin === 0) {
          combinations[runningTotal] = 1;
        }
      } else {
        if (combinations[runningTotal - coin] !== undefined) {
          combinations[runningTotal] += combinations[runningTotal - coin];
        }
      }
    }
  }
  return combinations[combinations.length - 1];
}