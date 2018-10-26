//Return array with all permutations where character order matters of a string and each character can be used unlimitedly
//Most time and space intensive out of all permutations
function getAllPermutationsNoLimit(string, lengthLimit = 1) {
  const set = setFromString(string);
  const output = [];
  recurse()
  function recurse(currentString = '') {
    if (currentString.length > lengthLimit) return;
    output.push(currentString);
    for (let char of set) {
      let nextString = currentString + char;
      recurse(nextString);
    }
  }
  return output;
}
function setFromString(string) {
  const set = new Set();
  for (let char of string) {
    set.add(char);
  }
  return set;
}
console.log(getAllPermutationsNoLimit('ab', 3)); //​​​​​['',​​​​​​​​ 'a',​​​​​ 'aa', 'aaa', 'aab', 'ab', 'aba', 'abb', 'b', 'ba', 'baa', 'bab', 'bb', 'bba', 'bbb']​​​​​