let counter = 0;
function inception() {
  if (counter > 3) {
    return console.log("done");
  }
  counter++;
  return inception();
}
inception();

// Rules of recursive functions
// 1. identfy the base case
// 2. identify the recursive case
// 3. Get closer and closer and return when needed. 
//    Usually you have 2 returns