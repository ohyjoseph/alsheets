//Return array with all unique permutations where character order doesn't matter of a string
//Assume all chars unique. If chars non-unique then array will contain duplicates
//Least time and space intensive out of all permutations
//Time: O(2ⁿ) Space: O(2ⁿ)
//Iterative
function powerSetI(string) {
  const output = [''];
  for (let char of string) {
    let length = output.length;
    for (let i = 0; i < length; i++) {
      output.push(output[i] + char);
    }
  }
  return output;
}
//Recursive
function powerSetR(string) {
  const output = [];
  recurse();
  return output;
  function recurse(currentString = '', currentIndex = 0) {
    output.push(currentString);
    for (let i = currentIndex; i < string.length; i++) {
      let nextString = currentString + string[i];
      recurse(nextString, i + 1);
    }
  }
}
console.log(powerSetI('abc')); //[ '', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c' ]