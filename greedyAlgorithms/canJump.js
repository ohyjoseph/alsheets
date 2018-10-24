//Given an array of non-negative integers, you are initially positioned at the 0th index.
//Each element in the array represents your maximum jump length at that position.
//Determine if you are able to reach the last index from the 0th index.

//Loop through array backwards and continuously determine the left most valid index
//that is capable of reaching the last index
//If index is capable of reaching last index then any indexes that are capable of
//reaching said index is also valid
function canJump(jumpsArray) {
  let leftMostValid = jumpsArray.length - 1;
  for (let i = jumpsArray.length - 1; i >= 0; i--) {
    let maxJump = jumpsArray[i];
    let maxIndex = i + jumpsArray[i];
    if (maxIndex >= leftMostValid) {
      if (i === 0) return true;
      leftMostValid = i;
    }
  }
  return false;
}
