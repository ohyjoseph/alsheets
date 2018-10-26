//Return array with all unique permutations where character order matters of a string
function getAllPermutations(string) {
  const map = mapFromString(string);
  const output = [];
  recurse()
  function recurse(currentString = '') {
    output.push(currentString);
    for (let [char, amount] of map) {
      if (amount > 0) { //makes sure to not reuse used chars
        let nextString = currentString + char;
        map.set(char, amount - 1);
        recurse(nextString);
        map.set(char, amount);
      }
    }
  }
  return output;
}
function mapFromString(string) {
  const map = new Map();
  for (let char of string) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
  return map;
}
console.log(getAllPermutations('abb')); //[ '', 'a', 'ab', 'abb', 'b', 'ba', 'bab', 'bb', 'bba' ]