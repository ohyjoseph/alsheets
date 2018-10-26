//Knapsack01 like
//For a list of items with weight and value, maximize value for a given weight capacity
function knapsack01(items, maxCapacity) {
  //Pick highest value while gradually adding more items and increasing capacity
  //items.sort((a, b) => a.weight - b.weight)
  const maxValues = []; //each row represents considering an additional item. Each column represents a capacity
  //for each item loop through 0 to maxCapacity
  for (let itemI = 0; itemI < items.length; itemI++) {
    let itemWeight = items[itemI].weight;
    let itemValue = items[itemI].value;
    let row = [];
    for (let currentCapacity = 0; currentCapacity <= maxCapacity; currentCapacity++) {
      if (itemI !== 0) { //all rows besides first
        let prevMax = maxValues[itemI - 1][currentCapacity]; //gets max value before considering this item
        let minusItemWeightMax = maxValues[itemI - 1][currentCapacity - itemWeight]; //gets max value minus this item's weight to make itemValue plus it valid
        if (itemWeight <= currentCapacity) { //if enough room in bag to add current item
          if (minusItemWeightMax !== undefined) {
            row.push(Math.max(prevMax, itemValue + minusItemWeightMax));
          } else { //if only enough room for this item choose max value between this item's value and previous max value without this item
            row.push(Math.max(prevMax, itemValue));
          }
        } else { //if not enough room in bag then max value is previous max without adding in this item
          row.push(prevMax);
        }
      } else { //first row
        currentCapacity >= itemWeight ? row.push(itemValue) : row.push(0); //if can fit in item then use item. Otherwise value is 0
      }
    }
    maxValues.push(row);
  }
  console.log(maxValues);
  return maxValues[maxValues.length - 1][maxValues[maxValues.length - 1].length - 1]
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