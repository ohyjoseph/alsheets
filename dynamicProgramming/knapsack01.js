//Knapsack01 like
//For a list of items with weight and value, maximize value for a giving weight capacity
function knapsack01(items, maxCapacity) {
  //Pick highest value while gradually adding more items and increasing capacity
  //items.sort((a, b) => a.weight - b.weight)
  const memo = [];
  //for each item loop through 0 to maxCapacity
  for (let itemI = 0; itemI < items.length; itemI++) {
    let weight = items[itemI].weight;
    let value = items[itemI].value;
    let row = [];
    for (let capacity = 0; capacity <= maxCapacity; capacity++) {
      if (itemI !== 0) { //all rows besides first
        let prevBest = memo[itemI - 1][capacity];
        let minusWeightBest = memo[itemI - 1][capacity - weight];
        if (capacity >= weight) {
          if (minusWeightBest !== undefined) {
            row.push(Math.max(prevBest, value + minusWeightBest));
          } else {
            row.push(Math.max(prevBest, value));
          }
        } else {
          row.push(prevBest);
        }
      } else { //first row
        capacity >= weight ? row.push(value) : row.push(0);
      }
    }
    memo.push(row);
  }
  console.log(memo);
  return memo[memo.length - 1][memo[memo.length - 1].length - 1]
}

//Answer using similar algorithm to permutations/powerSet.js
//Much slower
function knapsack01PowerSet(items, maxCapacity) {
  let maxValue = -Infinity;
  recurse();
  return maxValue;
  function recurse(currentValue = 0, currentWeight = 0, currentIndex = 0) {
    if (currentWeight > maxCapacity) return;
    maxValue = Math.max(maxValue, currentValue);
    for (let i = currentIndex; i < items.length; i++) {
      let itemValue = items[i].value;
      let itemWeight = items[i].weight;
      let nextValue = currentValue + itemValue;
      let nextWeight = currentWeight + itemWeight;
      recurse(nextValue, nextWeight, i + 1);
    }
  }
}

items = [{ weight: 10, value: 7 }, { weight: 6, value: 4 }, { weight: 8, value: 5 }, { weight: 2, value: 1 }]
console.log(knapsack01(items, 14)); //9