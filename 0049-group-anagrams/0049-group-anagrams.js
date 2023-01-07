/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const hash = new Map();
  for (let str of strs) {
    const key = str.split("").sort().join("");
    if (!hash.has(key)) hash.set(key, [str]);
    else hash.get(key).push(str);
  }
  return [...hash].map(([, bucket]) => bucket);
};
