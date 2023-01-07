/**
 * @param {number[][]} obstacleGrid
 * @return {number}\
 * @desc By DP
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length,
    n = obstacleGrid[0].length,
    dp = new Array(m).fill(0).map(() => new Array(n).fill(0)),
    get = (i, j) => dp[i]?.[j] ?? 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j]) continue;
      if (i === 0 && j === 0) dp[i][j] = 1;
      else dp[i][j] = get(i - 1, j) + get(i, j - 1);
    }
  }

  return get(m - 1, n - 1);
};
