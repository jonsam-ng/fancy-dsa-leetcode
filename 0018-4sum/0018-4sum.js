/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * @desc By BT
 */
var fourSum = function (nums, target) {
  let sum = 0;
  const n = 4,
    hash = new Map(),
    sortedNums = nums
      .sort((a, b) => a - b)
      .reduce((prev, cur) => {
        const count = (hash.get(cur) ?? 0) + 1;
        hash.set(cur, count);
        if (count <= n) prev.push(cur);
        return prev;
      }, []),
    len = sortedNums.length,
    r = [],
    seq = [],
    memo = new Set(),
    resolve = (start) => {
      if (seq.length === n && sum === target) {
        const key = seq.join(".");
        if (!memo.has(key)) {
          r.push([...seq]);
          memo.add(key);
        }
      }
      if (seq.length >= n) return;

      // make selections
      for (let i = start; i < len; i++) {
        const cur = sortedNums[i];
        // tree cutting
        // make current selection
        seq.push(cur);
        sum += cur;

        resolve(i + 1);
        // cancel current selection
        seq.pop();
        sum -= cur;
      }
    };
  
  return resolve(0), r;
};
