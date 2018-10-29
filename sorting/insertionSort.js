
//Time: O(n² Space: O(n)
function insertionSort(arr){
  for(let i = 1; i < arr.length; i++){
      let currentVal = arr[i];
      for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
          arr[j+1] = arr[j]
      }
      arr[j+1] = currentVal;
  }
  return arr;
}

let array = [0, 1, 6, 3, 2, 66, 2, 6, -9];
console.log(insertionSort(array)); //[-9, 0, 1, 2, 2, 3, 6, 6, 66]