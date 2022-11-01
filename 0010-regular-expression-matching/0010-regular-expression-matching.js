var isMatch = function (s, p) {
  const m = s.length,
        n = p.length,
        dp = new Array(m + 1).fill(null).map(r => new Array(n + 1).fill(false));
  dp[0][0] = true;

  for (let i = 0; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      if (j > 1 && p[j - 1] === "*") {
        dp[i][j] = dp[i][j - 2] || i > 0 && (s[i - 1] === p[j - 2] || p[j - 2] === ".") && dp[i - 1][j];
      } else {
        dp[i][j] = i > 0 && dp[i - 1][j - 1] && (s[i - 1] === p[j - 1] || p[j - 1] === ".");
      }
    }
  }

  return dp[m][n];
};
