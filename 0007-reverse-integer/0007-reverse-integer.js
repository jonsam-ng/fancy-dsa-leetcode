var reverse = function (x) {
  let t = 0;

  while (x !== 0) {
    t = t * 10 + x % 10;
    x = ~~(x / 10);
  }

  if (t > Math.pow(2, 31) - 1 || t < -Math.pow(2, 31)) return 0;
  return t;
};
