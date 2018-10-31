//Determine if three numbers from an array of numbers add up to a target value

//Time: O(n²) Space: O(n)
function threeSumExists(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    let set = new Set();
    for (let j = i + 1; j < nums.length; j++) {
      let sumOf2 = nums[i] + nums[j];
      let needed = target - sumOf2;
      if (set.has(needed)) {
        return true;
      }
      set.add(nums[j]); //add num to set after check so not to reuse a num
    }
  }
  return false;
}

console.log(threeSumExists([7, 7, 10, 6, 2, -3], 14)); //true
console.log(threeSumExists([7, 7, 10, 6, 2, -3], 21)); //false