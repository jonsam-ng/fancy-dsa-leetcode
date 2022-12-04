var numIslands = function (grid) {
  let r = 0;

  const m = grid.length,
    n = grid[0].length,
    dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ],
    flood = (i, j) => {
      if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === "0") return;
      grid[i][j] = "0";
      dirs.forEach(([x, y]) => flood(i + x, j + y));
    };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") r++, flood(i, j);
    }
  }

  return r;
};
