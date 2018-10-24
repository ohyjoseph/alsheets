//Given a sorted array determine if a pair of numbers average to target value
//Time: O(n) Space: O(1)
function averagePair(nums, targetAverage) {
  const target = targetAverage * 2;
  //Set 2 pointers. one equal to lowest index and one equal to highest index
  let lowPointer = 0;
  let highPointer = nums.length - 1;
  while (lowPointer < highPointer) {
    //Increment/Decrement a pointer based on how sum of nums compares to target
    let sum = nums[lowPointer] + nums[highPointer];
    if (sum === target) {
      return true;
    }
    if (sum > target) {
      highPointer--;
    } else {
      lowPointer++;
    }
  }
  return false;
}
