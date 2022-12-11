/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  if (!path) {
    throw new Error("Path must exists!");
  }
  const items = path.split("/").filter(Boolean),
    stack = [];
  for (let item of items) {
    if (item === ".") continue;
    if (item === "..") {
      if (stack.length) stack.pop();
      continue;
    }
    stack.push(item);
  }
  return "/" + stack.join("/");
};
