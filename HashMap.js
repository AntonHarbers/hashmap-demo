const { Node, LinkedList } = require('./LinkedList');

class HashMap {
  constructor(capacity) {
    this.load_factor = 0.75;
    this.buckets = Array(capacity);
    this.bucketsFilled = 0;
    this.initCapacity = capacity;
    this.isResizing = false;
    this.elementCount = 0;
  }

  hash(keyToHash) {
    var hash = 0;
    var prime = 31;

    keyToHash = keyToHash.toString();

    for (let i = 0; i < keyToHash.length; i++) {
      hash = prime * hash + keyToHash.charCodeAt(i);
    }

    hash = hash % this.buckets.length;
    return hash;
  }

  checkResize() {
    if (this.isResizing) return;
    if (this.bucketsFilled / this.buckets.length > this.load_factor) {
      this.resize();
    }
  }

  resize() {
    this.isResizing = true;
    this.bucketsFilled = 0;
    this.elementCount = 0;
    const oldBuckets = this.buckets;

    this.buckets = Array(this.buckets.length * 2);

    oldBuckets.forEach((bucket) => {
      if (bucket !== undefined) {
        let node = bucket.getHead();
        while (node) {
          this.set(node.value.value.key, node.value.value.value);
          node = node.pointer;
        }
      }
    });
    this.isResizing = false;
  }

  set(key, value) {
    // check capacity and tweak if needed
    this.checkResize();

    const index = this.hash(key);
    AccessingBucketThroughIndex(index, this.buckets.length);

    if (this.buckets[index] === undefined) {
      this.buckets[index] = new LinkedList();
      this.bucketsFilled++;
    }

    // Search for the key in the linked list
    for (
      let node = this.buckets[index].head;
      node !== null;
      node = node.pointer
    ) {
      if (node.value.key === key) {
        // Update existing key
        node.value.value = value;
        return;
      }
    }

    this.buckets[index].append(new Node({ key, value }));
    this.elementCount++;
  }

  get(key) {
    const index = this.hash(key);
    AccessingBucketThroughIndex(index, this.buckets.length);

    if (this.buckets[index] === undefined) {
      return null;
    } else {
      for (var i = 0; i < this.buckets[index].getSize(); i++) {
        if (this.buckets[index].at(i).value.key == key) {
          return this.buckets[index].at(i).value.value;
        }
      }
    }
  }

  has(key) {
    const index = this.hash(key);
    AccessingBucketThroughIndex(index, this.buckets.length);

    if (this.buckets[index] === undefined) {
      return false;
    } else {
      for (var i = 0; i < this.buckets[index].getSize(); i++) {
        if (this.buckets[index].at(i).value.key == key) {
          return true;
        }
      }
    }
  }

  remove(key) {
    // see if this key exists, if it does remove it otherwise return null
    const index = this.hash(key);
    AccessingBucketThroughIndex(index, this.buckets.length);

    if (this.buckets[index] === undefined) {
      return null;
    } else {
      for (var i = 0; i < this.buckets[index].getSize(); i++) {
        if (this.buckets[index].at(i).value.key == key) {
          // remove it
          this.buckets[index].removeAt(i);
          this.elementCount--;
        }
      }

      if (this.buckets[index].getSize() == 0) {
        this.buckets[index] = undefined;
      }
    }
  }

  length() {
    // finds how many keys are in the map
    return this.elementCount;
  }

  clear() {
    // clears the entire hash and resets it
    this.buckets = Array(this.initCapacity);
    this.elementCount = 0;
  }

  keys() {
    // returns an array containing all the keys inside the hash map
    const keys = [];
    for (let item of this.itemIterator()) {
      keys.push(item.key);
    }
    return keys;
  }

  values() {
    const values = [];
    for (let item of this.itemIterator()) {
      values.push(item.value);
    }
    return values;
  }

  entries() {
    const entries = [];
    for (let item of this.itemIterator()) {
      entries.push(item);
    }
    return entries;
  }

  *itemIterator() {
    for (let i = 0; i < this.buckets.length; i++) {
      let bucket = this.buckets[i];

      if (bucket !== undefined) {
        let currentNode = bucket.getHead();
        while (currentNode) {
          yield currentNode.value.value;
          currentNode = currentNode.pointer;
        }
      }
    }
  }
}

const AccessingBucketThroughIndex = (index, capacity) => {
  if (index < 0 || index >= capacity) {
    throw new Error('Trying to access index out of bound');
  }
};

module.exports = { HashMap };
