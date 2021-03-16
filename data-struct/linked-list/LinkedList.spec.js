import LinkedList from "./LinkedList.js";

const linkedList = new LinkedList();
linkedList
  .append("a", "1")
  .append("b", "2")
  .prepend("c", "3")
  .append("d", "4")
  .append("e", "5");
console.log(linkedList.toArray());
console.log(["c:3", "a:1", "b:2", "d:4", "e:5"]);

const e = linkedList.get("e");
console.log(e.toString());
console.log("e:5");

linkedList.delete("e");
console.log(linkedList.toArray());
console.log(["c:3", "a:1", "b:2", "d:4"]);
