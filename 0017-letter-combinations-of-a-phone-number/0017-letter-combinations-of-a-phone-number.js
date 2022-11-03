var letterCombinations = function (digits) {
  const len = digits.length,
        mapping = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"],
        r = [];

  const resolve = (i = 0, s = "") => {
    if (s.length === len) {
      !!s && r.push(s);
      return;
    }

    for (let j = i; j < len; j++) {
      const d = digits.charAt(j),
            letters = [...mapping[d]];

      for (letter of letters) {
        s += letter;
        resolve(j + 1, s);
        s = s.slice(0, -1);
      }
    }
  };

  resolve();
  return r;
};
