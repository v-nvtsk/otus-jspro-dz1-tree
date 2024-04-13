export const rootBranch = String.fromCharCode(9500) + String.fromCharCode(9472).repeat(2);
export const treeTrunk = String.fromCharCode(9474);
export const subBranch = (level = 0) =>
  treeTrunk + " ".repeat(level) + String.fromCharCode(9492) + String.fromCharCode(9472).repeat(2);

function printChildren(arr, level = 0) {
  let str = "";
  arr.forEach((item) => {
    str += `${subBranch(level)} ${item.name}\n`;
    if (item.items && item.items.length) {
      str += printChildren(item.items, level + 1);
    }
  });
  return str;
}

export function tree(obj) {
  const result = [];

  const root = obj.name;
  result.push(`${root}`);
  if (obj.items && obj.items.length) {
    result.push("\n");
    obj.items.forEach((item) => {
      result.push(`${rootBranch} ${item.name}\n`);
      if (item.items && item.items.length) {
        result.push(printChildren(item.items));
      }
    });
  }

  return result.join("");
}
