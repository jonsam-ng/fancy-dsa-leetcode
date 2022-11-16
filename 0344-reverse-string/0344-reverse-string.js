var reverseString = function (s) {
  const len = s.length;
  let l = 0;
  r = len - 1;

  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++, r--;
  }

  return s;
};
