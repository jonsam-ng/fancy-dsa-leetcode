var corpFlightBookings = function (bookings, n) {
  const diff = new Array(n).fill(0);
  bookings.map(([s, t, k]) => [s - 1, t - 1, k]).filter(([s, t, k]) => s >= 0 && s <= t && t < n).forEach(([s, t, k]) => {
    diff[s] += k;
    if (t + 1 < n) diff[t + 1] -= k;
  });
  return diff.reduce((r, d, i) => {
    if (i !== 0) r[i] = r[i - 1] + d;
    return r;
  }, [diff[0]]);
};
