var findAnagrams = function (s, p) {
  const sLen = s.length,
        pLen = p.length,
        toHash = s => [...s].reduce((m, c) => (m[c] ? m[c] += 1 : m[c] = 1, m), {}),
        ph = toHash(p);
        Object.keys(ph).length;
        const wh = {},
        updateWh = (c, add = true) => wh[c] = (wh[c] ?? 0) + (add ? 1 : -1),
        needOptimize = c => !!ph[c] && Object.keys(ph).every(c => wh[c] && wh[c] >= ph[c]),
        rst = [];

  if (pLen > sLen) return rst;
  let l = 0,
      r = 0;

  while (r < sLen) {
    const c = s[r++];
    updateWh(c);

    while (needOptimize(c)) {
      if (r - l === pLen) rst.push(l);
      updateWh(s[l++], false);
    }
  }

  return rst;
};
