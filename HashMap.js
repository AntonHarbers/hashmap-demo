class HashMap {}

const AccessingBucketThroughIndex = (index, buckets) => {
  if (index < 0 || index >= buckets.length) {
    throw new Error('Trying to access index out of bound');
  }
};