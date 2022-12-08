/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n < 2) return n;
  let prev2 = 1,
    prev1 = 1;

  for (let i = 2; i <= n; i++) {
    const sum = prev1 + prev2;
    prev2 = prev1;
    prev1 = sum;
  }
  
  return prev1;
};
