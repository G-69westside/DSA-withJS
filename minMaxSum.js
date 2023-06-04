function minMaxSum(input) {
  const sortedArray = input.sort((a, b) => a - b);
  let maxSum = 0;
  let minSum = 0;

  //min
  for (let i = 0; i < input.length - 1; i++) {
    console.log((minSum += sortedArray[i]));
  }

  //max
  for (let i = 5; i > input.length; i--) {
    console.log((minSum += sortedArray[i]));
  }
}
minMaxSum([1,2,3,4,5])