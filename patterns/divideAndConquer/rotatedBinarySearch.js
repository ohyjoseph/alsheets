//Rotated sorted array are sorted but not necessarily from beginning to end
//Time: O(log(n)) Space: O(1)

function rotatedBinarySearch(array, target) {
  let leftI = 0;
  let rightI = array.length - 1;
  while (leftI <= rightI) {
    let middleI = Math.floor((leftI + rightI) / 2);
    let pivotLocation = findPivotSide(array, leftI, middleI, rightI);
    if (array[middleI] === target) return middleI;
    if (pivotLocation === 0) { //logic when there is no pivot
      if (target < array[middleI]) {
        rightI = middleI - 1;
      } else {
        leftI = middleI + 1;
      }
    }
    else if (pivotLocation === -1) { //logic when pivot is on left side
      if (target > array[middleI] && target <= array[rightI]) {
        leftI = middleI + 1;
      } else {
        rightI = middleI - 1;
      }
    } else if (pivotLocation === 1) { //logic when pivot is on right sde
      if (target < array[middleI] && target >= array[leftI]) {
        rightI = middleI - 1;
      } else {
        leftI = middleI + 1;
      }
    }
  }
  return -1;
}

function findPivotSide(array, leftI, middleI, rightI) {
  if (array[leftI] > array[middleI]) return -1; //pivot occurs on left side
  else if (array[rightI] < array[middleI]) return 1; //pivot occurs on right side or exactly middle
  else return 0; //no pivot
}

array = [10, 12, 1, 4, 5, 6, 7];
array2 = [5, 6, 7, 10, 12, 1, 4];
array3 = [7, 10, 12, 1, 4, 6];
console.log(rotatedBinarySearch(array, 7)); //6
console.log(rotatedBinarySearch(array2, 7));//2
console.log(rotatedBinarySearch(array3, 7));//0