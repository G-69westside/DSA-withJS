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
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("found NEMO!");
    }
  }
  let t1 = performance.now();
  console.log("call to find nemo took" + (t1 - t0) + "milliseconds");
  console.log("nemo was found " + array.length + "times");
}

findNemo(large);
