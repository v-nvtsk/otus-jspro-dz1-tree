import { rootBranch, subBranch, tree } from "./tree";

describe("utilities", () => {
  it("rootBranch should return root node prefix", () => {
    expect(rootBranch).toEqual("├──");
  });

  it("subBranch should return sub node prefix", () => {
    expect(subBranch(0)).toEqual("│└──");
    expect(subBranch(1)).toEqual("│ └──");
    expect(subBranch(3)).toEqual("│   └──");
  });
});

describe("tree", () => {
  it("should be a function", () => {
    expect(tree).toBeInstanceOf(Function);
  });

  it("should return root node", () => {
    const obj = {
      name: "1",
      items: [],
    };
    expect(tree(obj)).toEqual("1");
  });

  it("should return children nodes", () => {
    const obj = {
      name: "1",
      items: [
        {
          name: "2",
          items: [],
        },
        {
          name: "3",
          items: [],
        },
      ],
    };
    expect(tree(obj)).toEqual(`1\n${rootBranch} 2\n${rootBranch} 3\n`);
  });

  it("should return nested nodes", () => {
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
    expect(tree(obj)).toEqual(
      `${obj.name}\n` +
        `${rootBranch} ${obj.items[0].name}\n` +
        `${subBranch()} ${obj.items[0].items[0].name}\n` +
        `${subBranch()} ${obj.items[0].items[1].name}\n` +
        `${rootBranch} ${obj.items[1].name}\n` +
        `${subBranch()} ${obj.items[1].items[0].name}\n` +
        `${subBranch(1)} ${obj.items[1].items[0].items[0].name}\n`,
    );
  });
});
