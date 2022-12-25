/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length,
    dp = new Array(m).fill(0).map(() => new Array(n).fill(Infinity)),
    get = (i, j) => dp[i][j] ?? Infinity;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] = i
        ? Math.min(get(i - 1, j - 1), get(i - 1, j), get(i - 1, j + 1)) +
          matrix[i][j]
        : matrix[i][j];
    }
  }
  
  return Math.min(...dp[m - 1]);
};
