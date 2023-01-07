/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let k = 1;

  let top = 0,
    bottom = n - 1,
    left = 0,
    right = n - 1;

  while (true) {
    for (let i = left; i <= right; i++) matrix[top][i] = k++;
    if(++top > bottom) break;
    for (let i = top; i <= bottom; i++) matrix[i][right] = k++;
    if(--right < left) break;
    for (let i = right; i >= left; i--) matrix[bottom][i] = k++;
    if(--bottom < top) break;
    for (let i = bottom; i >= top; i--) matrix[i][left] = k++;
    if(++left > right) break;
  }
  
  return matrix;
};
