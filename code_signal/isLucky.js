/**
 * Ticket numbers usually consist of an even number of digits. A ticket number is considered 
 * lucky if the sum of the first half of the digits is equal to the sum of the second half.

  Given a ticket number n, determine if it's lucky or not.

  Example

  For n = 1230, the output should be
  isLucky(n) = true;
  For n = 239017, the output should be
  isLucky(n) = false.
 * 
 UNDERSTAND: 
  the tickeks are usually even, sometimes they dont? (edge case)
  becuase the sum of both sides has to be equal to be considered lucky 
  creating counter for the left side and right side to keep track of the sum
  creating a hare and turtle counter as well to get the index of the numbers
  since n wont be in an array it will need to become one to traverse the numbers
   
 PLAN: 
 Make a list 
  Separate the first half and second half, then add the sums together
  if the match return a boolean

 */

const n = 1230;

function isLucky(n) {
  const arr = [...n.toString()];
  let turtle_side = 0;
  let rabit_side = 0;
  let rabit = arr.length / 2;
  let turtle = 0;
  for (let i = 0; i < arr.length / 2; i++) {
    turtle_side += Number(arr[turtle]);
    rabit_side += Number(arr[rabit]);
    rabit += 1;
    turtle += 1;
  }
  if (turtle_side === rabit_side) return true;
  return false;
}

console.log("isLucky(n)", isLucky(n));
