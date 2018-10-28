//Determine if an array with non-negative numbers contains a subArray that sums up to target value
//Note: Subarray means the indices are contiguous

//Time: O(n) Space: O(1)
function sumExistsInSubArray(array, target) {
  let removeI = 0;
  let addI = 0;
  let sum;
  while (addI <= array.length) { //instead of re-summing every loop, just remove what's not needed and add what is when necessary
    let removeValue = array[removeI];
    let addValue = array[addI];
    if (addI === removeI) {
      sum = addValue;
      addI++;
    }
    else if (sum === target) {
      return true;
    }
    else if (sum < target) { //increase window size
      sum += addValue; //sum might equal NaN because addI could be out of index but doesn't matter because loop will end right after
      addI++;
    } else { //decrease window size
      sum -= removeValue;
      removeI++;
    }
  }
  return false;
}
console.log(sumExistsInSubArray([4,0,5,5], 14)); //true
console.log(sumExistsInSubArray([4,0,5,5], 9)); //true
console.log(sumExistsInSubArray([6,1,5,2], 10)); //false