var maxAreaOfIsland = function (grid) {
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
      if (i < 0 || i >= m || j < 0 || j >= n || !grid[i][j]) return 0;
      grid[i][j] = 0;
      return dirs.reduce((sum, [x, y]) => (sum += flood(i + x, j + y)), 0) + 1;
    },
    resolve = () => {
      for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
          grid[i][j] && (r = Math.max(r, flood(i, j)));
    };

  return resolve(), r;
};
