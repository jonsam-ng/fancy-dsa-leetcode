/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  if (!version1 || !version2) {
    throw new Error("Invild version");
  }

  const vertion2Array = (version) => version.split(".").filter(Boolean);
  const [v1, v2] = [version1, version2].map((version) =>
    vertion2Array(version)
  );
  const getSubVersion = (i, v) => parseInt(v[i] ?? 0);
  const maxLen = Math.max(v1.length, v2.length);
  console.log(maxLen);

  for (let i = 0; i < maxLen; i++) {
    const subv1 = getSubVersion(i, v1),
      subv2 = getSubVersion(i, v2);
    console.log(subv1, subv2);
    // continue next sub version
    if (subv1 === subv2) continue;
    if (subv1 > subv2) return 1;
    return -1;
  }
  return 0;
};
