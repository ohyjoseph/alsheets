
//Time: O(n² Space: O(n)
function bubbleSort(array) {
  for (let i = array.length-1; i >= 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j+1]) {
        [array[j],array[j+1]] = [array[j+1], array[j]]
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return array;
}

let array = [0, 1, 6, 3, 2, 66, 2, 6, -9];
console.log(bubbleSort(array)); //[-9, 0, 1, 2, 2, 3, 6, 6, 66]