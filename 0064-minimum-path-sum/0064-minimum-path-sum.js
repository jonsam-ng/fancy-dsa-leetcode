/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const m = grid.length,
    n = grid[0].length,
    dp = new Array(m).fill(0).map(() => new Array(n).fill(0)),
    get = (i, j) => dp[i]?.[j] ?? Infinity;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] =
        !i && !j
          ? grid[i][j]
          : Math.min(get(i - 1, j), get(i, j - 1)) + grid[i][j];
    }
  }

  return get(m - 1, n - 1);
};
