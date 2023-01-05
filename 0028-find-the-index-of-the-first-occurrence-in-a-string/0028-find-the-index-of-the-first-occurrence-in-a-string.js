var getNext = function (p) {
  const len = p.length,
    next = [-1];
  let i = 0,
    j = -1;
  while (i < len) {
    if (j === -1 || p[i] === p[j]) {
      i++, j++;
      next[i] = j;
    } else j = next[j];
  }
  return next;
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * @desc By KMP
 */
var strStr = function (s, p) {
  if (!p) return 0;
  const n = s.length,
    m = p.length,
    next = getNext(p);
  for (let i = 0, j = 0; i < n; i++) {
    while (j > 0 && s[i] !== p[j]) j = next[j];
    if (s[i] === p[j]) j++;
    if (j === m) return i - m + 1;
  }

  return -1;
};
