/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length,
    rows = [],
    cols = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!matrix[i][j]) {
        if (!rows.includes(i)) rows.push(i);
        if (!cols.includes(j)) cols.push(j);
      }
    }
  }
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] && (rows.includes(i) || cols.includes(j))) {
        matrix[i][j] = 0;
      }
    }
  }
  
  return matrix;
};
