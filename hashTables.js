// let user = {
//   age: 54,
//   name: "Tony",
//   magic: true,
//   scream: () => {
//     console.log("aaah");
//   },
// };

// user.age // O(1)
// user.spell = 'Abra' // O(1)
// user.scream() // O(1)
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return console.log(this.data);
  }
  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    for (let i = 0; i < currentBucket.length; i++) {
      if (currentBucket[i][0] === key) {
        return console.log(currentBucket[i][1]);
      }
    }
  }
}
const myHashTable = new HashTable(20);
myHashTable.set("grapes", 54);
myHashTable.set("apple", 2000);
myHashTable.get("grapes");
