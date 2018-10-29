//Determine if 2nd string is anagram of 1st string

//Time: O(n) Space: O(n)
function validAnagram(string1, string2) {
  const map = new Map(); //Map is very similar to an object
  for (let char of string2) { //making key value pairs of chars of string2 where a char is a string and its value is the amount of that char
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
  for (let char of string1) { //gradually removing from map based on string1 chars
    if (map.has(char)) {
      if (map.get(char) <= 0) {
        return false;
      } else if (map.get(char) === 1) {
        map.delete(char);
      } else {
        map.set(char, map.get(char) - 1);
      }
    } else {
      return false;
    }
  }
  return map.size === 0;
}

console.log(validAnagram('pizzahut', 'hutzapiz')); //true
console.log(validAnagram('pizzahut', 'hutzapizs')); //false