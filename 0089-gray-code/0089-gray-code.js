/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  const dp = [[0, 1]];

  for (let i = 1; i < n; i++) {
    const seq = [...dp[i - 1]],
      reverse = [...dp[i - 1]].reverse();
    seq.push(...reverse.map((n) => n + Math.pow(2, i)));
    dp[i] = seq;
  }
  
  return dp[n - 1];
};
