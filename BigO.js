const nemo = ["nemo"];

const everyone = [
  "dory",
  "bruce",
  "markin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "sqittee",
  "darla",
  "hank",
];
const large = new Array(100).fill("nemo");
function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("found NEMO!");
    }
  }
  console.log("nemo was found " + array.length + "times");
}

findNemo(large) // 0(n) --> It takes linear time to find neom 


function funChallenge(input){
  let a=10; // 0(1)
  a= 50+3; //0(1)
  for(let i=0; i< input.length; i++){ // 0(n)
    anotherFunction(); // 0(n)
    let stranger = true; // 0(n)
    a++; //0(n)
  }
  return a; //0(1)

} // BIG O(3 + 4n)



// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) { 
  let a = 5; // O(1)
  let b = 10;// O(1)
  let c = 50;// O(1)
  for (let i = 0; i < input; i++) { // O(n)
    let x = i + 1; // O(n)
    let y = i + 2;// O(n)
    let z = i + 3;// O(n)

  }
  for (let j = 0; j < input; j++) { // O(n)
    let p = j * 2;// O(n)
    let q = j * 2;// O(n)
  }
  let whoAmI = "I don't know"; //O(1)
}  // 4 + 7n 
 