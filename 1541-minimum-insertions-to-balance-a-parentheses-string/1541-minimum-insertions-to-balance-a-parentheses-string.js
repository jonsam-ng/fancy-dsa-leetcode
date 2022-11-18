var minInsertions = function (s) {
  const len = s.length,
        lp = "(";
  let ic = 0,
      mc = 0;
  if (!len) return ic;

  for (let i = 0; i < len; i++) {
    if (s[i] === lp) {
      mc += 2;
      if (mc % 2) mc--, ic++;
    } else {
      mc--;
      if (mc < 0) mc += 2, ic++;
    }
  }

  return ic + mc;
};
