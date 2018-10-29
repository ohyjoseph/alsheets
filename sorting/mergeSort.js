//Continuously split array in half until array length is 1 then merge arrays using two pointers to merge

//Time: O(n * log(n)) Space: O(n)
function mergeSort(array) {
  if (array.length <= 1) return array;
  let midIndex = Math.floor(array.length / 2);
  let leftHalf = array.slice(0, midIndex);
  let rightHalf = array.slice(midIndex, array.length);
  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
}

function merge(sorted1, sorted2) {
  let index1 = 0;
  let index2 = 0;
  const output = [];
  //while (index1 + index2 < sorted1.length + sorted2.length) {
  while (index1 < sorted1.length || index2 < sorted2.length) {
    let value1 = sorted1[index1];
    let value2 = sorted2[index2];
    if (value2 === undefined || value1 < value2) {
      output.push(value1);
      index1++;
    } else {
      output.push(value2);
      index2++;
    }
  }
  return output;
}

let array = [0, 1, 6, 3, 2, 66, 2, 6, -9];
console.log(mergeSort(array)); //[-9, 0, 1, 2, 2, 3, 6, 6, 66]