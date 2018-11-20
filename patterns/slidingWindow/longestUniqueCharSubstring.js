//Find the longest substrings where all chars are unique of a string
//Note: Substring means the indices are contiguous

//Time: O(n) Space: O(n)
function longestUniqueCharSubstrings(string) {
  let output = [];
  let longestIndices = [0, 0];
  const set = new Set(); //keeps track of used chars in constant time
  let removeI = 0;
  let addI = 0;
  while (addI < string.length) { //instead of re-iterating every loop, just remove char if next one to be added is already in set otherwise add next char to set
    let removeChar = string[removeI];
    let addChar = string[addI];
    if (removeI === addI || !set.has(addChar)) {
      set.add(addChar);
      let currentLength = addI - removeI + 1;
      let longestLength = longestIndices[1] - longestIndices[0] + 1;
      if (currentLength === longestLength) output.push([removeI, addI]);
      else if (currentLength > longestLength) {
        longestIndices = [removeI, addI];
        output = [[removeI, addI]];
      }
      addI++;
    } else {
      set.delete(removeChar);
      removeI++;
    }
  }
  return output.map(([leftI, rightI]) => { //storing indices so mapping actual string results to return
    return string.substring(leftI, rightI+1);
  });
}

console.log(longestUniqueCharSubstrings('mississippi')); //['mis', 'sip']
console.log(longestUniqueCharSubstrings('pp')); //['p', 'p']
console.log(longestUniqueCharSubstrings('')); //[]