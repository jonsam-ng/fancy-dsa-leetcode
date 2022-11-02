var intToRoman = function (num) {
  const special = {
    4: "IV",
    9: "IX",
    40: "XL",
    90: "XC",
    400: "CD",
    900: "CM"
  };
  const base = [{
    b: 1,
    c: "I"
  }, {
    b: 5,
    c: "V"
  }, {
    b: 10,
    c: "X"
  }, {
    b: 50,
    c: "L"
  }, {
    b: 100,
    c: "C"
  }, {
    b: 500,
    c: "D"
  }, {
    b: 1000,
    c: "M"
  }];
  if (special[String(num)]) return special[String(num)];
  return base.reverse().reduce((rst, {
    b,
    c
  }) => {
    const hb = String(num)[0] + "0".repeat(String(num).length - 1);

    if (special[hb]) {
      rst += special[hb];
      num = num - Number(hb);
    } else {
      rst += c.repeat(~~(num / b));
      num = num % b;
    }

    return rst;
  }, "");
};
