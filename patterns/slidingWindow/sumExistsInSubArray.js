//Determine if an array with non-negative numbers contains a subArray that sums up to target value
//Note: Subarray means the indices are contiguous

//Time: O(n) Space: O(1)
function sumExistsInSubArray(array, target) {
  let removeI = 0;
  let addI = 0;
  let sum = 0;
  while (addI <= array.length) { //instead of re-summing every loop, just remove what's not needed and add what is when necessary
    let removeValue = array[removeI];
    let addValue = array[addI];
    if (addI === removeI || sum < target) { //need first part of if because sum might equal 0 erroneously because no value has been added yet
      sum += addValue; //sum might equal NaN because addI could be out of index but doesn't matter because loop will end right after
      addI++;
    }
    else if (sum > target) { //decrease window size
      sum -= removeValue;
      removeI++;
    }
    else {
      return true;
    }
  }
  return false;
}
console.log(sumExistsInSubArray([1,0,0,8], 0)); //true
console.log(sumExistsInSubArray([4,0,5,5], 14)); //true
console.log(sumExistsInSubArray([4,0,5,5], 9)); //true
console.log(sumExistsInSubArray([6,1,5,2], 10)); //false
console.log(sumExistsInSubArray([6,1,5,2], 0)); //false