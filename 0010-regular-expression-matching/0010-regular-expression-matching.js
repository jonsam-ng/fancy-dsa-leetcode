var isMatch = function (s, p) {
  const m = s.length,
    n = p.length,
    dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(false)),
    isCharMatch = (i, j) => s[i] === p[j] || p[j] === ".";
  dp[0][0] = true;
  // match pattern in the row, and match string to the column
  // we know empty pattern cannot match any string except ''
  // but empty string may could match some patterns.
  for (let i = 0; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // we will consider * as special case, but it cannot be the first letter
      if (j > 1 && p[j - 1] === "*") {
        dp[i][j] =
          dp[i][j - 2] || (i > 0 && dp[i - 1][j] && isCharMatch(i - 1, j - 2));
      } else {
        dp[i][j] = i > 0 && dp[i - 1][j - 1] && isCharMatch(i - 1, j - 1);
      }
    }
  }

  return dp[m][n];
};
