import LinkedList from "./LinkedList.js";

function buildLinkedList() {
  return new LinkedList()
    .append("a", "1")
    .append("b", "2")
    .prepend("c", "3")
    .append("d", "4")
    .append("e", "5");
}

test("append", () => {
  const linkedList = buildLinkedList();
  expect(linkedList.toArray()).toStrictEqual([
    "c:3",
    "a:1",
    "b:2",
    "d:4",
    "e:5",
  ]);
});

test("get", () => {
  const linkedList = buildLinkedList();
  const e = linkedList.get("e");
  expect(e.toString()).toBe("e:5");
});

test("delete", () => {
  const linkedList = buildLinkedList();
  linkedList.delete("e");
  expect(linkedList.toArray()).toStrictEqual(["c:3", "a:1", "b:2", "d:4"]);
});

test("deleteHead", () => {
  const linkedList = buildLinkedList();
  linkedList.deleteHead();
  expect(linkedList.toArray()).toStrictEqual(["a:1", "b:2", "d:4", "e:5"]);
});

test("fromArray", () => {
  const fromArrayList = new LinkedList().fromArray(["s:1", "r:2", "g:3"]);
  expect(fromArrayList.toArray()).toStrictEqual(["s:1", "r:2", "g:3"]);
});
