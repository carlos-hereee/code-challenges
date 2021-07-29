function arrayChange(inputArray) {
  // the input array should be increasing order
  // track the min number of turns required
  let turns = 0;
  // get the current number
  for (i = 0; i < inputArray.length; i++) {
    const current = inputArray[i];
    // if the number is more than next number in the queue or equal
    if (current >= inputArray[i + 1]) {
      const difference = current - inputArray[i + 1];
      // subtract the numbers and add the remainder to min number of turns required +1
      turns += difference + 1;
      inputArray[i + 1] += difference + 1;
      // then add that to the next number
    }
  }
  return turns;
}

console.log("arrayChange()", arrayChange([1, 1, 1]));
