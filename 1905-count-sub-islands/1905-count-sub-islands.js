var countSubIslands = function (grid1, grid2) {
  let r = 0;

  const m = grid1.length,
    n = grid1[0].length,
    dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ],
    flood = (i, j, grid = grid2) => {
      if (i < 0 || i >= m || j < 0 || j >= n || !grid[i][j]) return;
      grid[i][j] = 0;
      dirs.forEach(([x, y]) => flood(i + x, j + y));
    },
    resolve = () => {
      for (let i = 0; i < m; i++)
        for (j = 0; j < n; j++) !grid1[i][j] && grid2[i][j] && flood(i, j);

      for (let i = 0; i < m; i++)
        for (j = 0; j < n; j++) grid2[i][j] && (r++, flood(i, j));
    };

  return resolve(), r;
};
