//Fibonacci like
//Find distinct # of ways to climb staircase. Can climb 1 or 2 steps at a time.
//Time: O(n) Space: O(n)
function climbStairs(n) {
  const solutions = [0, 1, 2];
  for (let i = 3; i < n + 1; i++) {
    solutions[i] = solutions[i - 1] + solutions[i - 2];
  }
  return solutions[n];
}
//Time: O(n) Space: O(1)
function climbStairs(n) {
  if (n === 0 || n === 1) return n;
  let oldest = 1; let old = 2;
  for (let i = 3; i <= n; i++) {
    var current = old + oldest;
    oldest = old;
    old = current;
  }
  return current;
}
