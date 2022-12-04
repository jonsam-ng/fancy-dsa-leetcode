var combine = function (n, k) {
  if (k > n) return [];

  const r = [],
        s = [],
        resolve = (i = 0) => {
    if (s.length === k) {
      r.push([...s]);
      return null;
    }

    for (let j = i; j < n; j++) {
      s.push(j + 1);
      resolve(j + 1);
      s.pop();
    }
  };

  return resolve(), r;
};
