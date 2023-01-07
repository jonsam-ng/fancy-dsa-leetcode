/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let top = 0,
    right = matrix[0].length - 1,
    bottom = matrix.length - 1,
    left = 0;
  const  rst = [];

  while (true) {
    for (let i = left; i <= right; i++) rst.push(matrix[top][i]);
    if (++top > bottom) break;

    for (let i = top; i <= bottom; i++) rst.push(matrix[i][right]);
    if (--right < left) break;

    for (let i = right; i >= left; i--) rst.push(matrix[bottom][i]);
    if (--bottom < top) break;

    for (let i = bottom; i >= top; i--) rst.push(matrix[i][left]);
    if (++left > right) break;
  }
  
  return rst;
};
