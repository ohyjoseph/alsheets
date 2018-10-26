//CoinSums like
//Return the possible number of ways someone could make change for a given Pence.
function coinSums(target, coins = [1, 2, 5, 10, 20, 50, 100, 200]) {
  const combinations = [1]; //Base case represents there being 1 combination to get a target of 0 pence
  //Each index in combinations array represents a corresponding total value
  for (let coin of coins) {
    for (let runningTotal = 0; runningTotal <= target; runningTotal++) {
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

//Answer using similar algorithm to permutations/getAllPermutationsNoLimit.js
//Much slower
function coinSumsPermutation (target, coins = [1,2,5,10,20,50,100,200]) {
  let count = 0;
  recurse();
  return count;
  function recurse(currentTotal = 0, currentIndex = 0) {
    if (currentTotal === target) count++;
    if (currentTotal >= target) return;
    for (let i = currentIndex; i < coins.length; i++) {
      let nextTotal = currentTotal + coins[i];
      recurse(nextTotal, i);
    }
  }
}

console.log(coinSums(17)); //28