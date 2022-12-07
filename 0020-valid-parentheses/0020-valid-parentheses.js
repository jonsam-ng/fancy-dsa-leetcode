/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const len = s.length,
    stack = [],
    lp = ["(", "{", "["],
    rp = [")", "}", "]"];
  const isLeft = (char) => lp.includes(char);
  const isMatch = (c1, c2) => isLeft(c2) && lp.indexOf(c2) === rp.indexOf(c1);

  for (let i = 0; i < len; i++) {
    const char = s[i];

    // push the left parenthese to the stack
    if (isLeft(char)) {
      stack.push(char);
    } else {
      // match the two chars
      const char2 = stack.pop();
      if (!isMatch(char, char2)) return false;
    }
  }
  return !stack.length;
};
