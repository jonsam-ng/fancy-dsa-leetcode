/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const len = s.length;
  if (!len) return 0;
  let w = "",
    max = 0,
    l = 0,
    r = l;

  while (l < len) {
    const c = s.charAt(r),
      idx = w.indexOf(c);
    if (idx !== -1) {
      w = w.slice(idx + 1);
      l += idx + 1;
    }
    w += c;
    r++;
    max = Math.max(max, w.length);
  }
  return max;
};
