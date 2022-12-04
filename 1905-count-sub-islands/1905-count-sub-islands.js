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

// 不同形状岛屿的数量
var numDistinctIslands = function (grid) {
  const set = new Set(),
    m = grid.length,
    n = grid[0].length,
    dirs = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ],
    flood = (i, j, dir = "", s = []) => {
      if (i < 0 || i >= m || j < 0 || j >= n || !grid[i][j]) return;
      grid[i][j] = 0;
      s.push(dir);
      dirs.forEach(([x, y], idx) => flood(i + x, j + y, idx, s));
      s.push(-dir);
    },
    resolve = () => {
      for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++) {
          if (grid[i][j]) {
            const shape = [];
            flood(i, j, "", shape);
            set.add(shape.join(""));
          }
        }
    };

  return resolve(), set.size;
};
