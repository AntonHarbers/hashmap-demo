const { Node, LinkedList } = require('./LinkedList');

class HashMap {
  constructor(capacity) {
    this.load_factor = 0.75;
    this.buckets = Array(capacity);
    this.bucketsFilled = 0;
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
    this.buckets = CheckAndUpdateCapacity(
      this.buckets,
      this.bucketsFilled,
      this.load_factor
    );
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
  }

  length() {
    // finds how many keys are in the map
  }

  clear() {
    // clears the entire hash and resets it
  }

  keys() {
    // returns an array containing all the keys inside the hash map
  }

  values() {
    // returns an array of all the values inside the hash map
  }

  entries() {
    // returs an array containing all key,value pairs in the hash map
  }
}

const CheckAndUpdateCapacity = (
  currentBuckets,
  currentEntryAmount,
  loadFactor
) => {
  if (currentEntryAmount / currentBuckets.length > loadFactor) {
    newBuckets = Array(currentBuckets.length * 2);
    currentBuckets.forEach((bucket, index) => {
      newBuckets[index] = bucket;
    });
    return newBuckets;
  }
  return currentBuckets;
};

const AccessingBucketThroughIndex = (index, capacity) => {
  if (index < 0 || index >= capacity) {
    throw new Error('Trying to access index out of bound');
  }
};

const map = new HashMap(100);

Array.from({ length: 100 }, (_, i) => {
  map.set('key' + i, i);
});
console.log(map);
console.log(map.has('key50'));

console.log(map.has('key510'));
