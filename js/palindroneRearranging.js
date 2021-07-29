/* 
  find out if string is a palindrone
  for it to be a palindrone there must
*/

function palindromeRearranging(inputString) {
  // if character length is even than it must have matching letters
  // if lenght is odd then all but one have to be matching letters
  // keep track of the odd number
  const isEven = inputString.length % 2 === 0;
  let oddCounter = 2;
  for (i = 0; i < inputString.length; i++) {
    const current = inputString[i];
    const isAlone = [...inputString].filter((char) => char === current).length;
    // count how many times that word is being represendted
    // if the number is odd than its not a palindrone
    if (isEven && isAlone % 2 !== 0) return false;
    if (!isEven && isAlone % 2 !== 0) oddCounter -= 1;
  }
  if (oddCounter < 1) return false;
  return true;
}

function optimalSolution(inputString) {
  // input to array
  const array = [...inputString];
  // keep track of the tally
  const tally = [];
  // keep track of the number of odds
  let oddCounter = 0;
  // add to tally
  array.map((element) => {
    if (tally[element]) {
      tally[element]++;
    } else {
      tally[element] = 1;
    }
  });
  for (const item in tally) {
    if (oddCounter > 1) break;
    if (tally[item] % 2 === 1) {
      oddCounter++;
    }
  }
  return oddCounter <= 1;
}

console.log("palindromeRearranging -- Even", palindromeRearranging("aabb"));
console.log("palindromeRearranging -- Odd ", palindromeRearranging("abcad"));
console.log("palindromeRearranging -- Odd ", palindromeRearranging("abbcabb"));
