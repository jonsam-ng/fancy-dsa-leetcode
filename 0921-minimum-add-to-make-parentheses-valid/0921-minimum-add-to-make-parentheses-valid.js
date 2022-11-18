var minAddToMakeValid = function (s) {
  const len = s.length,
        lp = "(";
  let ic = 0,
      mc = 0;
  if (!len) return ic;

  for (let i = 0; i < len; i++) {
    s[i] === lp ? mc++ : mc--;
    if (mc < 0) mc = 0, ic++;
  }

  return ic + mc;
};
