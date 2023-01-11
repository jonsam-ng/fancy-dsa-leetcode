/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let sumLen = 0,
    isEnd = false;
  const len = words.length,
    grp = [],
    rst = [],
    canGroup = (word) => {
      return sumLen + word.length + grp.length <= maxWidth;
    },
    processGroup = () => {
      const grpLen = grp.length,
        totalSpaces = maxWidth - sumLen,
        avgSpaceNum =
          grpLen - 1 === 0 ? 0 : Math.floor(totalSpaces / (grpLen - 1));
      let extraSpaces =
          avgSpaceNum === 0 ? 0 : totalSpaces - avgSpaceNum * (grpLen - 1),
        line = "";

      for (let i = 0; i < grpLen; i++) {
        const word = grp[i];
        line +=
          i >= grpLen - 1
            ? word
            : word + " ".repeat(isEnd ? 1 : avgSpaceNum + (extraSpaces > 0));
        extraSpaces--;
      }

      if (isEnd) line += " ".repeat(totalSpaces - (grpLen - 1));
      else if (grpLen === 1) line += " ".repeat(totalSpaces);

      rst.push(line);
      grp.length = 0;
      sumLen = 0;
    };

  for (let i = 0; i < len; i++) {
    const word = words[i],
      wordLen = word.length;
    if (!canGroup(word)) processGroup();
    grp.push(word);
    sumLen += wordLen;
    if (i === len - 1) isEnd = true;
  }
  if (grp.length) processGroup();

  return rst;
};
