function arrayMaximalAdjacentDifference(inputArray) {
  // keep track of the max diffrent
  let max = 0;
  for (n = 0; n < inputArray.length; n++) {
    const difference = Math.abs(inputArray[n + 1] - inputArray[n]);
    if (difference > max) max = difference;
  }
  return max;
}
console.log("fn()", arrayMaximalAdjacentDifference([2, 4, 1, 0]));
