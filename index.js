// class myArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }

//   get(index) {
//     return this.data[index];
//   }

//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }

//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }
//   delete(index) {
//     const item = this.data[index];
//     this.shiftItems(index);
//   }
//   shiftItems(index) {
//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//   }
// }
// const newArray = new myArray();
// newArray.push("hi");
// newArray.pop();
// console.log(newArray);

// function that reverses a string
// 'Hi My name is Andrei' should be "ierdnA si eman yM iH"
// var text = "Hi My name is Andrei";
// function reverse(str) {
//   // check input
//   if (!str || str.length < 2 || typeof str !== "string") {
//     return console.log("hmm, that's not good");
//   }
//   const backwards = [];
//   const totalItems = str.length - 1;
//   console.log(totalItems);
//   for (let i = totalItems; i >= 0; i--) {
//     backwards.push(str[i]);
//   }
//   console.log(backwards);

//   return console.log(backwards.join(""));
// }

// function reverse2(str) {
//   return console.log(str.split("").reverse().join(""));
// }
// [0, 3, 4, 31][(4, 6, 30)];
// function mergeSortedArrays(arr1, arr2) {
//   const combined = arr1.concat(arr2).sort((a, b) => a - b);
//   console.log(combined);
// }
// mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] == target && i !== j) {
        return console.log([i, j]);
      }
    }
  }
};
twoSum([3, 3], 6);
// [2,5,8,3] = 13
