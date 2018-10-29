//Find the peak population year given an array of tuples containing birth years and death years
//Assume births occur at the very beginning of a year and deaths occur at the very end of a year

//Time: O(numYears + arrayLength) Space: O(numYears + arrayLength)
function getPopPeak(peopleArray) {
  let [minYear, maxYear] = getEdgeBirthYears(peopleArray);
  let outputYear = minYear;
  let popMap = new Map();
  let deltaMap = mapDelta(peopleArray);
  for (let year = minYear; year <= maxYear; year++) {
    let deltaPop = deltaMap.get(year) || 0;
    if (!popMap.size) popMap.set(year, deltaPop);
    else {
      let prevYearPop = popMap.get(year - 1);
      popMap.set(year, prevYearPop + deltaPop);
    }
    if (popMap.get(year) > popMap.get(outputYear)) outputYear = year;
  }
  return outputYear;
}

function getEdgeBirthYears(array) { //used to get the min and max birth years. Don't need to loop through more because death years just lower population
  let maxYear = -Infinity;
  let minYear = Infinity;
  for (let years of array) {
    let birthYear = years[0];
    minYear = Math.min(minYear, birthYear);
    maxYear = Math.max(maxYear, birthYear);
  }
  return [minYear, maxYear];
}

function mapDelta(array) { //used to get the change in population for every year
  const map = new Map();
  for (let years of array) {
    let birthYear = years[0];
    let deathYear = years[1];
    if (map.has(birthYear)) map.set(birthYear, map.get(birthYear) + 1);
    else map.set(birthYear, 1);
    if (map.has(deathYear + 1)) map.set(deathYear + 1, map.get(deathYear + 1) - 1); //adding 1 to death year because deaths happen at the very end of the year
    else map.set(deathYear + 1, -1);
  }
  return map;
}

let people = [[2000, 2060], [2055, 2100], [2032, 2060], [2000, 2047], [2061, 2070]];
let people2 = [[1890, 1940], [1899, 1939], [1854, 1890], [1900, 1900], [1890, 1940]];
let people3 = [[1, 2], [2, 2]];
console.log(getPopPeak(people)); //2032
console.log(getPopPeak(people2)); //1900
console.log(getPopPeak(people3)); //2
