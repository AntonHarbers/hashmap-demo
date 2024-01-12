const { Node, LinkedList } = require('./LinkedList');

class HashMap {
  constructor(capacity) {
    this.load_factor = 0.75;
    this.buckets = Array(capacity);
    this.bucketsFilled = 0;
    this.initCapacity = capacity;
  }

  hash(keyToHash) {
    var hash = 0;
    var prime = 31;

    for (let i = 0; i < keyToHash.length; i++) {
      hash = prime * hash + keyToHash.charCodeAt(i);
    }

    hash = hash % this.buckets.length;
    return hash;
  }

  set(key, value) {
    // check capacity and tweak if needed
    if (this.bucketsFilled / this.buckets.length > this.load_factor) {
      this.bucketsFilled = 0;
      const oldBuckets = this.buckets;
      this.buckets = Array(this.buckets.length * 2);

      oldBuckets.forEach((bucket, index) => {
        for (var i = 0; i < bucket.getSize(); i++) {
          const node = bucket.at(i);
          this.set(node.value.key, node.value.value);
        }
      });
    }

    const index = this.hash(key);
    AccessingBucketThroughIndex(index, this.capacity);

    if (this.buckets[index] != undefined) {
      for (var i = 0; i < this.buckets[index].size; i++) {
        if (this.buckets[index].at(i).value.key === key) {
          this.buckets[index].insertAt({ key, value }, i);
        }
      }

      this.buckets[index].append(new Node({ key, value }));
    } else {
      this.buckets[index] = new LinkedList();
      this.buckets[index].append(new Node({ key, value }));
    }

    this.bucketsFilled++;
  }

  get(key) {
    const index = this.hash(key);
    AccessingBucketThroughIndex(index);

    if (this.buckets[index] == undefined) {
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
    AccessingBucketThroughIndex(index);

    if (this.buckets[index] == undefined) {
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
    AccessingBucketThroughIndex(index);

    if (this.buckets[index] == undefined) {
      return null;
    } else {
      for (var i = 0; i < this.buckets[index].getSize(); i++) {
        if (this.buckets[index].at(i).value.key == key) {
          // remove it
          this.buckets[index].removeAt(i);
        }
      }

      if (this.buckets[index].getSize() == 0) {
        this.buckets[index] = undefined;
      }
    }
  }

  length() {
    // finds how many keys are in the map
    var length = 0;

    for (var i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] != undefined) {
        const bucketSize = this.buckets[i].getSize();
        length += bucketSize;
      }
    }
    return length;
  }

  clear() {
    // clears the entire hash and resets it
    this.buckets = Array(this.initCapacity);
  }

  keys() {
    // returns an array containing all the keys inside the hash map
    const keys = [];
    for (var i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] != undefined) {
        var currentNode = this.buckets[i].getHead();
        while (currentNode != null) {
          keys.push(currentNode.value.value.key);
          currentNode = currentNode.pointer;
        }
      }
    }
    return keys;
  }

  values() {
    const values = [];
    for (var i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] != undefined) {
        var currentNode = this.buckets[i].getHead();
        while (currentNode != null) {
          values.push(currentNode.value.value.value);
          currentNode = currentNode.pointer;
        }
      }
    }
    return values;
  }

  entries() {
    const entries = [];
    for (var i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i] != undefined) {
        var currentNode = this.buckets[i].getHead();
        while (currentNode != null) {
          entries.push(currentNode.value.value);
          currentNode = currentNode.pointer;
        }
      }
    }
    return entries;
  }
}

const AccessingBucketThroughIndex = (index, capacity) => {
  if (index < 0 || index >= capacity) {
    throw new Error('Trying to access index out of bound');
  }
};

module.exports = { HashMap };
