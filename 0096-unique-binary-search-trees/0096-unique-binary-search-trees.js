var numTrees = function (n) {
  const memo = new Array(n + 1).fill(0).map(r => new Array(n + 1).fill(0)),
        count = (l, h) => {
    if (l > h) return 1;
    if (memo[l][h]) return memo[l][h];
    let r = 0;

    for (let i = l; i <= h; i++) r += count(l, i - 1) * count(i + 1, h);

    return memo[l][h] = r;
  };

  return count(1, n);
};
