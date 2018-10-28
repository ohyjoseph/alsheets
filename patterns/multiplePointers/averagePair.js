//Given a sorted array determine if a pair of numbers average to target value
//Time: O(n) Space: O(1)
function averagePair(sortedNums, targetAverage) {
  const target = targetAverage * 2;
  //Set 2 pointers. one equal to lowest index and one equal to highest index
  let lowPointer = 0;
  let highPointer = sortedNums.length - 1;
  while (lowPointer < highPointer) {
    //Increment/Decrement a pointer based on how sum of sortedNums compares to target
    let sum = sortedNums[lowPointer] + sortedNums[highPointer];
    if (sum === target) {
      return true;
    }
    if (sum > target) {
      highPointer--;
    } else {
      lowPointer++;
    }
  }
  return false;
}

console.log(averagePair([0,2,8,23,24], 13)); //true