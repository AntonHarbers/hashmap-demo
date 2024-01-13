# Hashmap Demo - The Odin Project 🚀

Welcome to the **Hashmap Demo**, a super cool JavaScript implementation of a hashmap created for [The Odin Project](https://www.theodinproject.com/). This is a showcase of data structures done right, built from the ground up with skill and a dash of coding finesse!

## What's Inside? 🧐

Get ready to explore a custom-built hashmap that efficiently handles key functionalities like setting, getting, and removing key-value pairs, with collision handling done right.

### Features

- **Custom Hash Function**: Crafted for fair distribution of key-value pairs.
- **Collision Handling with Linked Lists**: Smartly handles data collisions.
- **Dynamic Resizing**: Scales beautifully as your data grows.
- **Iterator Functionality**: Traverse keys, values, and entries with ease.
- **Essential Operations**: Set, get, remove, and check keys in a flash!

## Getting Started 🚀

Ready to dive in? Here's how to get this hashmap up and running on your local machine:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/en/) installed to run this project.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/AntonHarbers/hashmap-demo
   cd hashmap-demo
   ```

2. **Run the Demo**:
   ```bash
   node script.js
   ```

And that's it! You're now experiencing the power of this custom hashmap. Feel free to tweak the script, hashmap or linked list for your custom usage

## Usage 🛠️

Here's how to use the hashmap:

### Creating a HashMap

```javascript
const { HashMap } = require('./HashMap');
const myMap = new HashMap(20); // Initialize with desired capacity
```

### Adding Elements

```javascript
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
```

### Retrieving Elements

```javascript
const value = myMap.get('key1'); // returns 'value1'
```

### Checking Existence

```javascript
if (myMap.has('key1')) {
  console.log('Key1 exists!');
}
```

### Removing Elements

```javascript
myMap.remove('key1'); // Key1 is now gone!
```

### Iterating

```javascript
for (const keyValue of myMap.entries()) {
  console.log(keyValue); // Logs each key-value pair
}
```

## Documentation 📚

The HashMap class includes these methods:

- `set(key, value)`: Add or update a key-value pair.
- `get(key)`: Retrieve the value for a given key.
- `has(key)`: Check if a key is in the hashmap.
- `remove(key)`: Remove a key-value pair.
- `length()`: Get the number of pairs in the hashmap.
- `keys()`: List all keys.
- `values()`: List all values.
- `entries()`: List all key-value pairs.
- `clear()`: Clear the hashmap.

## Contributions 🤝

While contributions are currently not welcome as this is a personal portfolio project, feel free to clone or fork it for your own experiments!

## License 📝

This project is released under the [MIT License](LICENSE).

## Acknowledgments 🙏

- A big thank you to [The Odin Project](https://www.theodinproject.com/) for the inspiration behind this build.
- Cheers to the JavaScript community for making learning and coding a fun journey.
