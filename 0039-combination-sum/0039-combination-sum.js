var combinationSum = function (candidates, target) {
  const len = candidates.length,
    r = [],
    s = [],
    toSum = (arr) => arr.reduce((sum, n) => (sum += n), 0),
    resolve = (i = 0) => {
      const sum = toSum(s);
      if (sum === target) r.push([...s]);
      if (sum >= target) return;

      for (let j = i; j < len; j++) {
        s.push(candidates[j]);
        resolve(j);
        s.pop();
      }
    };

  return resolve(), r;
};
