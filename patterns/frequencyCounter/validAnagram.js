//Determine if 2nd string is anagram of 1st string
//Time: O(n) Space: O(n)
function validAnagram(string1, string2) {
  const map = new Map(); //Map is very similar to an object
  for (let char of string2) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
  for (let char of string1) {
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