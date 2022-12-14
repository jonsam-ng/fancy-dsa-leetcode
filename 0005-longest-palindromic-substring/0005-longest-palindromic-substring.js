var longestPalindrome = function (s) {
  const len = s.length;
  let rst = "";
  const palindrome = (l, r) => {
    while (l >= 0 && r < len && s[l] === s[r]) l--, r++;
    return s.substring(l + 1, r);
  };

  for (let i = 0; i < len; i++) {
    const s1 = palindrome(i, i),
      s2 = palindrome(i, i + 1),
      longer = s1.length >= s2.length ? s1 : s2;

    if (longer.length > rst.length) rst = longer;
  }

  return rst;
};
