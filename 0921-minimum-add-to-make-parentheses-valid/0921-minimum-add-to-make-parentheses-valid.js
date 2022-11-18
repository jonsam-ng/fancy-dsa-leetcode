var minAddToMakeValid = function (s) {
  const len = s.length,
        lp = "(";
  let ic = 0,
      lc = 0;
  if (!len) return ic;

  for (let i = 0; i < len; i++) {
    s[i] === lp ? lc++ : lc--;
    if (lc < 0) lc = 0, ic++;
  }

  return ic + lc;
};
