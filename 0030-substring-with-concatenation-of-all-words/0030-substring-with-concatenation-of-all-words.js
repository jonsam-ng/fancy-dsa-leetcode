function counter(target, n) {
  const hash = new Map(),
    len = target.length,
    isArray = Array.isArray(target);
  for (let i = 0; i < len; i += isArray ? 1 : n) {
    const key = isArray ? target[i] : target.slice(i, i + n);
    hash.set(key, (hash.get(key) ?? 0) + 1);
  }
  return hash;
}

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const len = s.length,
    wordCount = words.length,
    wordLen = words[0].length,
    winWidth = wordCount * wordLen,
    wordsHash = counter(words, wordLen),
    isHashEqual = (h1, h2) => {
      let isEqual = true;
      for (let [k, v] of h1) {
        if (h2.get(k) !== v) {
          isEqual = false;
          break;
        }
      }
      return isEqual;
    },
    rst = [];

  for (let i = 0; i < len - winWidth + 1; i++) {
    const hash = counter(s.slice(i, i + winWidth), wordLen);
    if (isHashEqual(hash, wordsHash)) rst.push(i);
  }
  return rst;
};
