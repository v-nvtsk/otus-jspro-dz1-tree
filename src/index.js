import { tree } from "./tree";

const obj = {
  name: 1,
  items: [
    {
      name: 2,
      items: [{ name: 3 }, { name: 4 }],
    },
    {
      name: 5,
      items: [{ name: 6, items: [{ name: 7 }] }],
    },
  ],
};
process.stdout.write(tree(obj));
