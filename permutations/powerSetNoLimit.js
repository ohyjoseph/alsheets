//Return array with all permutations where character order doesn't matter of a string and each character can be used unlimitedly
//Assume all chars unique. If chars non-unique then array will contain duplicates
//Time: O(2ⁿ) Space: O(2ⁿ)

function powerSetNoLimit(string, lengthLimit = 1) {
  let filteredString = filterOutStringDupes(string); //only needed if input has non-unique chars
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

function filterOutStringDupes(string) {
  const set = new Set();
  let filteredString = '';
  for (let char of string) {
    if (!set.has(char)) {
      filteredString += char;
      set.add(char);
    }
  }
  return filteredString;
}
console.log(powerSetNoLimit('ab', 3)); //['', 'a', 'aa', 'aaa', 'aab', 'ab', 'abb', 'b', 'bb', 'bbb']​​​​