var lengthOfLongestSubstring = function (s) {
  let ml = 0;

  for (let i = 0, rst = ""; i < s.length; i++) {
    const c = s[i],
          idx = rst.indexOf(c);
    if (idx >= 0) rst = rst.slice(idx + 1);
    rst += c;
    if (rst.length > ml) ml = rst.length;
  }

  return ml;
};
