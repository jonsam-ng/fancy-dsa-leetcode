var fib = function (n) {
  const dp = [0, 1];
  if (n <= 1) return dp[n];

  for (let i = 2; i <= n; i++) dp[i] = dp[i - 1] + dp[i - 2];

  return dp[n];
};
