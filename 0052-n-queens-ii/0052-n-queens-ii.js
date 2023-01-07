/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let rst = 0;
  const board = new Array(n).fill(0).map(() => new Array(n).fill(0)),
    isValid = (row, col) => {
      let valid = true;
      for (let i = 0; i < col; i++) board[row][i] && (valid = false);
      // @note 斜线上不能重复
      for (let i = row, j = col; i >= 0 && j >= 0; i--, j--)
        board[i][j] && (valid = false);
      for (let i = row, j = col; i < n && j >= 0; i++, j--)
        board[i][j] && (valid = false);
      return valid;
    },
    resolve = (col) => {
      if (col >= n) return ++rst;
      for (let row = 0; row < n; row++) {
        if (!isValid(row, col)) continue;
        board[row][col] = 1;
        resolve(col + 1);
        board[row][col] = 0;
      }
    };

  return resolve(0), rst;
};
