//Continuously check median and divide search area in half
//Time: O(log(n)) Space: O(1);
function binarySearch(array, target) {
  let leftI = 0;
  let rightI = array.length - 1;
  while (leftI < rightI) {
    let checkI = Math.floor(leftI + rightI);
    if (target === array[checkI]) return checkI;
    if (target > array[checkI]) {
      leftI = checkI + 1;
    } else {
      rightI = checkI - 1;
    }
  }
  return -1;
}

//This version used to specify intial starting points for pointers
//Time: O(log(n)) Space: O(1);
function binarySearch(sortedArray, target, startIndex=0, endIndex=sortedArray.length-1) {
  while (startIndex <= endIndex) {
      let midIndex = Math.floor((startIndex + endIndex) / 2);
      let value = sortedArray[midIndex];
      if (value === target) {
          return midIndex;
      } else if (value < target) {
          startIndex = midIndex + 1;
      } else {
          endIndex = midIndex - 1;
      }
  }
  return -1;
}