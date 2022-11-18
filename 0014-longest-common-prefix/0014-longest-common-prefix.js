var longestCommonPrefix = function (strs) {
  const len = strs.length;
  if (!len) return "";
  if (len === 1) return strs[0];

  const findLCP = (s1, s2) => {
    const s = [...s1].concat([...s2].reverse()),
          sLen = s.length;
    let i = 0,
        j = sLen - 1,
        lcp = "";

    while (i < s1.length, j >= s1.length) {
      if (s[i] !== s[j]) break;
      i++, j--;
    }

    if (i > 0) lcp = s1.substring(0, i);
    return lcp;
  };

  let rst = findLCP(strs[0], strs[1]);

  for (let i = 2; i < len; i++) {
    rst = findLCP(rst, strs[i]);
    if (!rst) break;
  }

  return rst;
};
