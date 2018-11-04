//Return array with all unique permutations where character order doesn't matter of a string and each character can be used unlimitedly
//Assume all chars unique. If chars non-unique then array will contain duplicates
//Time: O(2ⁿ) Space: O(2ⁿ)

function powerSetNoLimit(string, lengthLimit = 1) {
  let filteredString = getUniqueString(string); //only needed if input has non-unique chars
  const output = [];
  recurse();
  return output;
  function recurse(currentString = '', currentIndex = 0) {
    if (currentString.length > lengthLimit) return;
    output.push(currentString);
    for (let i = currentIndex; i < filteredString.length; i++) {
      let nextString = currentString + filteredString[i];
      recurse(nextString, i);
    }
  }
}
function getUniqueString(string) {
  const set = new Set();
  let outputString = '';
  for (let char of string) {
    if (!set.has(char)) {
      outputString += char;
      set.add(char);
    }
  }
  return outputString;
}

console.log(powerSetNoLimit('ab', 3)); //['', 'a', 'aa', 'aaa', 'aab', 'ab', 'abb', 'b', 'bb', 'bbb']​​​​