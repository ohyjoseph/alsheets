//Determine if a subArray exists that sum up to target value
//Note: Subarray means the indices are contiguous
//sliding window with window resizing array.length times
//Time: O(n²) Space: O(n)
function sumExistsInSubArray(array, target) {
  //start with smallest window and stop when window is array.length
  //after inner loop increase window size by one
  //inner loop while highI < array.size
  //go until initialHigh is size of array
  for (let initialHigh = 0; initialHigh < array.length; initialHigh++) {
    let highI = initialHigh;
    let lowI = 0;
    //set initial sum
    let sum = 0;
    for (let i = 0; i <= highI; i++) {
      sum += array[i];
    }
    if (sum === target) return true;
    while (highI < array.length - 1) {
      //Instead of remaking sum every iteration subtract start num and add end num
      let removeValue = array[lowI];
      highI++;
      lowI++;
      let addValue = array[highI];
      sum -= removeValue;
      sum += addValue;
      if (sum === target) return true;
    }
  }
  return false;
}