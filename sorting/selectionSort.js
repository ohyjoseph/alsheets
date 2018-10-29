
//Time: O(n² Space: O(n)
function selectionSort(array) {
  for (let i = 0; i < array.length-1; i++) {
    let minIndex = i;
    for (let j = i+1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
  }
  return array;
}

let array = [0, 1, 6, 3, 2, 66, 2, 6, -9];
console.log(selectionSort(array)); //[-9, 0, 1, 2, 2, 3, 6, 6, 66]