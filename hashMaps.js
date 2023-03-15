// let user = {
//   age: 54,
//   name: "tony",
//   magic: true,
//   scream: function () {
//     console.log("aaahhhh!");
//   },
// };
// console.log(user.age);  // 0(1)
// console.log(user.spell = 'abra kadabra');//O(1)


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
}
const myHashTable = new HashTable(50)
myHashTable.set('grapes',1000)
myHashTable.get('grapes')
