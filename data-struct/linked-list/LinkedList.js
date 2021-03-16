class LinkedNode {
  key;
  value;
  next;
  constructor({ key, value, next }) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
  toString() {
    return `${this.key}:${this.value}`;
  }
}

export default class LinkedList {
  head;
  tail;
  constructor() {
    this.head = null;
    this.tail = null;
  }
  get(key, next) {
    const cursorNode = next ? next : this.head;
    if (cursorNode.key === key) {
      return cursorNode;
    } else if (cursorNode.next) {
      return this.get(key, cursorNode.next);
    }
    return null;
  }
  prepend(key, value) {
    const newNode = new LinkedNode({
      key,
      value,
    });
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }
  append(key, value) {
    const newNode = new LinkedNode({
      key,
      value,
    });
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }
  delete(key) {
    if (!this.head) return null;
    let cursorNode = this.head;
    if (cursorNode.key === key) {
      this.head = this.next;
      return cursorNode;
    }
    while (cursorNode) {
      if (cursorNode && cursorNode.next && cursorNode.next.key === key) {
        let deleteNode = cursorNode.next;
        cursorNode.next = deleteNode.next;
        deleteNode.next = null;
        return deleteNode;
      }
      cursorNode = cursorNode.next;
    }
    return null;
  }
  toArray() {
    if (!this.head) return [];
    const array = [];
    let cursorNode = this.head;
    while (cursorNode) {
      array.push(cursorNode.toString());
      cursorNode = cursorNode.next;
    }
    return array;
  }
}
