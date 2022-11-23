var solveNQueens = function (n) {
  const r = [],
        board = new Array(n).fill(0).map(r => new Array(n).fill(".")),
        hit = j => j >= n,
        update = () => r.push(board.map(r => [...r])),
        isQueue = (i, j) => board[i][j] === "Q",
        isValid = (i, j) => {
    for (let k = 0; k < j; k++) if (isQueue(i, k)) return false;

    for (let k = i, z = j; k < n && z >= 0; k++, z--) if (isQueue(k, z)) return false;

    for (let k = i, z = j; k >= 0 && z >= 0; k--, z--) if (isQueue(k, z)) return false;

    return true;
  },
        go = (i, j) => board[i][j] = "Q",
        back = (i, j) => board[i][j] = ".",
        resolve = (j = 0) => {
    if (hit(j)) return update();

    for (let i = 0; i < n; i++) {
      if (!isValid(i, j)) continue;
      go(i, j);
      resolve(j + 1);
      back(i, j);
    }
  };

  return resolve(), r.map(board => board.map(r => r.join(""))).reverse();
};
