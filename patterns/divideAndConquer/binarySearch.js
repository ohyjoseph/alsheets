//Continuously check median and half search area
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
