class Node {
  constructor(value = null) {
    this.value = value;
    this.pointer = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  getSize() {
    return this.size;
  }

  append(value) {
    let node = new Node(value);

    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.pointer = node;
      this.tail = node;
    }

    this.size++;
  }

  prepend(value) {
    let node = new Node(value);

    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.pointer = this.head;
      this.head = node;
    }

    this.size++;
  }

  isEmpty() {
    return this.size === 0;
  }

  pop() {
    if (this.size === 0) {
      return null;
    } else if (this.size === 1) {
      let node = this.head;
      this.head = null;
      this.tail = null;
      this.size--;
      return node.value;
    } else {
      let node = this.tail;
      let currentNode = this.head;

      while (currentNode.pointer !== this.tail) {
        currentNode = currentNode.pointer;
      }

      currentNode.pointer = null;
      this.tail = currentNode;
      this.size--;
      return node.value;
    }
  }

  at(index) {
    if (index >= this.size) {
      return null;
    } else {
      let node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.pointer;
      }
      return node.value;
    }
  }

  contains(value) {
    let node = this.head;

    while (node) {
      if (node.value === value) {
        return true;
      }

      node = node.pointer;
    }

    return false;
  }

  find(value) {
    let node = this.head;

    while (node) {
      if (node.value === value) {
        return node;
      }

      node = node.pointer;
    }

    return null;
  }

  toString() {
    let node = this.head;
    let str = '';

    while (node) {
      str += node.value + ' ';
      node = node.pointer;
    }

    return str.trim();
  }

  insertAt(value, index) {
    if (index > this.size) {
      return null;
    }

    let node = new Node(value);

    if (index === 0) {
      node.pointer = this.head;
      this.head = node;
      if (this.size === 0) {
        this.tail = node;
      }
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.pointer;
      }
      node.pointer = currentNode.pointer;
      currentNode.pointer = node;
      if (index === this.size) {
        this.tail = node;
      }
    }

    this.size++;
  }

  removeAt(index) {
    if (index >= this.size) {
      return null;
    }

    if (index === 0) {
      let node = this.head;
      this.head = node.pointer;
      if (this.size === 1) {
        this.tail = null;
      }
      this.size--;
      return node.value;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.pointer;
      }
      let node = currentNode.pointer;
      currentNode.pointer = node.pointer;
      if (index === this.size - 1) {
        this.tail = currentNode;
      }
      this.size--;
      return node.value;
    }
  }

  printList() {
    let node = this.head;
    let str = '';

    while (node) {
      str += node.value + ' ';
      node = node.pointer;
    }
    console.log(str.trim());
  }
}

module.exports = { Node, LinkedList };
