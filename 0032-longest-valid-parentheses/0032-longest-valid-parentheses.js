/**
 * @param {string} s
 * @return {number}
 * @desc By DP
 */
var longestValidParentheses = function (s) {
  const len = s.length,
    dp = new Array(len).fill(0),
    isLeft = (s) => s === "(",
    isRight = (s) => s === ")",
    get = (i) => dp[i] ?? 0;
  let max = 0;

  // First parenthese cannot valid, so start from 1
  for (let i = 1; i < len; i++) {
    // Ignore left parenthese because it cannot update valid result
    if (isRight(s[i])) {
      const lastValidIdx = i - get(i - 1) - 1;
      if (isLeft(s[lastValidIdx]))
        dp[i] += get(lastValidIdx - 1) + get(i - 1) + 2;
      max = Math.max(max, get(i));
    }
  }

  return max;
};
