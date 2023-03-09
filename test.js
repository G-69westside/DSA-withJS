function boo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("boooo!");
  }
}
function arrayofHiNTimes(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return console.log(hiArray);
}

const array = [
  { tweet: "hi", date: 2012 },
  { tweet: "my", date: 2014 },
  { tweet: "teddy", date: 2022 },
];

const array1 = ["a", "b", "c", "d", "x"];
const array2 = ["z", "e", "y"];

function commonItem(arr1, arr2) {
  // Loop through first array and create object where properties === items in the array
  //loop through the second array and check if item in second array exists on created object
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return console.log(true);
    }
  }
  return console.log(false);
}
commonItem(array1, array2); // O(a+b)

// function containscommonitem(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return console.log(true);
//       }
//     }
//   }
//   return console.log(false);
// }
// containscommonitem(array1, array2);
