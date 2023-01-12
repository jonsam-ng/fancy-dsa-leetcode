/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length,
    n = board[0].length,
    dirs = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ],
    search = (i, j, word, visited) => {
      if (!word) return true;
      
      const key = `${i}-${j}`;
      if (i < 0 || i >= m || j < 0 || j >= n || visited.has(key)) return false;
      
      const ok = word.at(0) === board[i][j];
      if(ok) visited.add(key);
      
      const nextOk = ok && dirs.some(([x, y]) =>
        search(i + x, j + y, word.slice(1), visited)
      );
      
      if (!nextOk) visited.delete(key);
      return nextOk;
    };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (search(i, j, word, new Set())) return true;
    }
  }

  return false;
};
