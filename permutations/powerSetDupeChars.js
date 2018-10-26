//Return array with all permutations where character order doesn't matter of a string
//Chars don’t have to be unique
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
        map.set(char, amount - 1);
        let nextString = currentString + char;
        if (amount > 0) { //if duplicate character exists makes sure to visit it
          recurse(nextString, localIndex);
        } else {
          recurse(nextString, localIndex + 1);
        }
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
