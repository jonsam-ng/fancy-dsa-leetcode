var convert = function (s, numRows) {
  if (!s || numRows <= 0) return "";
  if (numRows === 1) return s;
  const len = s.length,
        size = 2 * numRows - 2;
  let rst = "";

  for (let i = 0; i < numRows; i++) {
    for (let j = i; j < len; j += size) {
      rst += s.charAt(j);

      if (![0, numRows - 1].includes(i)) {
        const index = size - 2 * i + j;
        if (index < len) rst += s.charAt(index);
      }
    }
  }

  return rst;
};
