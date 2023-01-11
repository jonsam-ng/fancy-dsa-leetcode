/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let s1 = [...a],
    s2 = [...b];
  if (b.length > a.length) (s1 = [...b]), (s2 = [...a]);
  const len1 = s1.length,
    len2 = s2.length,
    gap = len1 - len2;

  for (let i = len1 - 1; i >= 0; i--) {
    if (i - gap < 0) break;
    s1[i] = String(+s1[i] + +s2[i - gap]);
  }

  s1.unshift("0");
  for (let i = len1; i >= 1; i--) {
    if (+s1[i] < 2) continue;
    s1[i - 1] = String(~~(+s1[i] / 2) + +s1[i - 1]);
    s1[i] = String(+s1[i] % 2);
  }

  if (s1[0] === "0") s1.shift();
  return s1.join("");
};
