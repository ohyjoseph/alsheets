//Find all unique sets that use a given amount of numbers that sum to a given target

//Time: O(numsUsed * nums ^(numsUsed-1)) Space: O(nums)
function targetSumCombinations(nums, target = 0, numsUsed = 3) {
  if (numsUsed === 1) {
    if (nums.includes(target)) return [target];
    else return [];
  }
  if (numsUsed < 1) return null;

  const output = [];
  if (nums.length < numsUsed) return output; //can't have a valid combination if not enough nums exist
  let filteredNums = filterNumbers(nums, numsUsed);
  filteredNums.sort(); //sort so that when using nums as a key for map, the same use of numbers stringify to the same key
  const setput = new Set(); //used to prevent duplicate entries
  let tempSet = new Set(); //used to store possible needed values in the last loop
  let prevNums = []; //need this to bring nums to further nested loops
  recurse();
  return output;
  function recurse(startIndex = 0, iteration = 1) {
    for (let i = startIndex; i < filteredNums.length - numsUsed + iteration + 1; i++) { //enter when on the last loop of the iteration
      prevNums.push(filteredNums[i]);
      if (iteration >= numsUsed - 1) {
        let needed = target - prevNums.reduce((total, num) => total + num, 0); //the num needed to match the target
        if (tempSet.has(needed)) { //check the set of previously stored nums of this iteration to see if it matches the needed num
          let numArray = [...prevNums, needed]; //linear in terms of numsUsed
          stringNums = numArray.toString(); //reason why time complexity has numsUsed *
          if (!setput.has(stringNums)) {
            output.push(numArray);
            setput.add(stringNums);
          }
        }
        tempSet.add(filteredNums[i]);
        if (i === filteredNums.length - 1) tempSet.clear(); //clear set when this iteration is done
      } else {
        recurse(i + 1, iteration + 1); //keep making loops until reaching the last loop
      }
      prevNums.pop();
    }
  }
}

function filterNumbers(numbers, numsUsed) { //only allows numsUsed amount of each number because more than that could never be used in a single combination
  const map = new Map();
  return numbers.filter((num) => {
    let shouldAdd = false;
    if (map.has(num)) {
      let amount = map.get(num);
      if (amount <= numsUsed - 1) shouldAdd = true;
      else shouldAdd = false;
    } else shouldAdd = true;
    map.set(num, map.get(num) + 1 || 1);
    return shouldAdd;
  });
}

let numbers = [-7, -5, 0, 7, 1, -10, -2, 7, 7, 0, -10, -5, 7, 28];
console.log(targetSumCombinations(numbers, 28, 3)); //​​​​​[ [ -7, 7, 28 ], [ 0, 28, 0 ] ]​​​​​
console.log(targetSumCombinations(numbers, 28, 4)); //​​​​​[ [ -2, -5, 7, 28 ], [ -7, 0, 7, 28 ], [ 7, 7, 7, 7 ] ]​​​​​
console.log(targetSumCombinations(numbers, 28, 5)); //​​​​​[ [ -2, -5, 0, 7, 28 ], [ -7, 0, 0, 7, 28 ], [ 0, 7, 7, 7, 7 ] ]​​​​​