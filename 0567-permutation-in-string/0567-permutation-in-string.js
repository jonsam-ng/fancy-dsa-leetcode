var checkInclusion = function (s1, s2) {
  const m = s2.length,
        n = s1.length,
        offset = c => c.charCodeAt() - "a".charCodeAt(),
        cnt = new Array(26).fill(0);

  if (n > m) return false;

  for (let i = 0; i < n; i++) --cnt[offset(s1[i])];

  let l = 0,
      r = 0;

  while (r < m) {
    const co = offset(s2[r++]);
    ++cnt[co];

    while (cnt[co] > 0) --cnt[offset(s2[l++])];

    if (r - l === n) return true;
  }

  return false;
};
