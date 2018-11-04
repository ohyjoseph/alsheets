//Return array with all unique permutations where character order matters of a string and each character can be used unlimitedly
//Most time and space intensive out of all permutations
function getAllPermutationsNoLimit(string, lengthLimit = 1) {
  const uniqueString = getUniqueString(string); //only needed if input has non-unique chars
  const output = [];
  recurse()
  function recurse(currentString = '') {
    if (currentString.length > lengthLimit) return;
    output.push(currentString);
    for (let char of uniqueString) {
      let nextString = currentString + char;
      recurse(nextString);
    }
  }
  return output;
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
console.log(getAllPermutationsNoLimit('ab', 3)); //​​​​​['',​​​​​​​​ 'a',​​​​​ 'aa', 'aaa', 'aab', 'ab', 'aba', 'abb', 'b', 'ba', 'baa', 'bab', 'bb', 'bba', 'bbb']​​​​​