const { HashMap } = require('./HashMap');

const map = new HashMap(5);

Array.from({ length: 2 }, (_, i) => {
  map.set('key' + i, i);
});
console.log('----     Initial Map     ----');
console.log('Length: ' + map.length());
console.log('Keys: ' + map.keys());
console.log('Values: ' + map.values());
for (var i = 0; i < map.entries().length; i++) {
  console.log(map.entries()[i]);
}
map.set('name', 'Peter');
console.log('----     Added Peter Name    ----');
console.log('Length: ' + map.length());
console.log('Keys: ' + map.keys());
console.log('Values: ' + map.values());
for (var i = 0; i < map.entries().length; i++) {
  console.log(map.entries()[i]);
}
map.set('name1', 'Swain');
map.set('Hello', 'World');
console.log('----     Added Swain Name   and hello world  ----');
console.log('Length: ' + map.length());
console.log('Keys: ' + map.keys());
console.log('Values: ' + map.values());
for (var i = 0; i < map.entries().length; i++) {
  console.log(map.entries()[i]);
}
map.remove('Hello');
console.log('----     Removed Hello Key    ----');
console.log('Length: ' + map.length());
console.log('Keys: ' + map.keys());
console.log('Values: ' + map.values());
for (var i = 0; i < map.entries().length; i++) {
  console.log(map.entries()[i]);
}
