function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return console.log(input[i]);
      }
    }
  }
  return console.log(undefined);
} // O(n^2) time complexity

function firstRecurringCharacter2(input) {
  let object = {};
  for (let i of input) {
    console.log(object);
    if (object[i]) {
      return console.log(object[i]);
    } else {
      object[i] = i;
    }
  }
  console.log(object);
  return console.log(undefined);
}  // O(n)
firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]);
