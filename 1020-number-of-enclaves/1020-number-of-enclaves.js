var numEnclaves = function (grid) {
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
      if (i < 0 || i >= m || j < 0 || j >= n || !grid[i][j]) return;
      grid[i][j] = 0;
      dirs.forEach(([x, y]) => flood(i + x, j + y));
    },
    resolve = () => {
      for (let i = 0; i < m; i++) flood(i, 0), flood(i, n - 1);

      for (let i = 0; i < n; i++) flood(0, i), flood(m - 1, i);

      for (let i = 1; i < m - 1; i++)
        for (let j = 1; j < n - 1; j++) grid[i][j] && r++;
    };

  return resolve(), r;
};
