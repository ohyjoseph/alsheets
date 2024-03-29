//Return array with all unique permutations where character order doesn't matter of a string and chars in input don’t have to be unique
function powerSumDupeChars(string) {
  const output = [];
  const map = mapString(string);
  recurse();
  return output;
  function recurse(currentString = '', index = 0) {
    output.push(currentString);
    let localIndex = 0;
    for (let [char, amount] of map) {
      if (localIndex >= index && amount > 0) { //localIndex used so to not revisit chars
        let nextString = currentString + char;
        map.set(char, amount - 1);
        recurse(nextString, localIndex);
        map.set(char, amount);
      }
      localIndex++;
    }
  }
}
function mapString(string) {
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
console.log(powerSumDupeChars('abb')); //​​​​​[ '', 'a', 'ab', 'abb', 'b', 'bb' ]
