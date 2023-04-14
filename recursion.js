let counter = 0;
function inception() {
  if (counter > 3) {
    return console.log("done");
  }
  counter++;
  return inception();
}

// Rules of recursive functions
// 1. identfy the base case
// 2. identify the recursive case
// 3. Get closer and closer and return when needed.
//    Usually you have 2 returns

// write two functions that finds the factoril of any number.
//One should use recursive , the other should just use a for loop

function findFactorialRecursive(number) {
  // code here

  if(number === 2){
    return 2 ;
  }
  return number * findFactorialRecursive(number -1 )
}
function findFactorialIterative(number) {
  // code here
  let answer = 1;
  if (number === 2) {
    answer = 2;
  }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return console.log(answer);
}

