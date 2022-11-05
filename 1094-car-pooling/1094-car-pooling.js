var carPooling = function (trips, capacity) {
  const len = 1001,
        diff = new Array(len).fill(0);
  trips.forEach(([n, i, j]) => {
    diff[i] += n;
    diff[j] -= n;
  });
  return diff.reduce((r, d, i) => (i !== 0 && (r[i] = r[i - 1] + d), r), [diff[0]]).every(n => n <= capacity);
};
