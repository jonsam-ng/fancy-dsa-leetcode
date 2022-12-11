/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const len = s.length,
    rst = [],
    buckets = new Array(4).fill("");
  if (len < 4 || len > 12) return [];
  let curBucket = 0;
  const isValid = (str) => {
    if (
      !str ||
      str.length > 3 ||
      (str.length > 1 && str[0] === "0") ||
      +str > 255
    )
      return false;
    return true;
  };

  const resolve = (start) => {
    // update result
    if (start >= len) {
      if (buckets.every((str) => !!str)) rst.push([...buckets]);
      return;
    }

    for (let i = curBucket; i < 4; i++) {
      // tree cutting
      if (!isValid(buckets[i] + s[start])) continue;
      // make current selection
      buckets[i] += s[start];
      curBucket = i;
      resolve(start + 1);
      // cancel current selection
      buckets[i] = buckets[i].slice(0, -1);
    }
  };

  return resolve(0), rst.map((ip) => ip.join("."));
};
