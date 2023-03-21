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

firstRecurringCharacter([2, 3, 4]);
