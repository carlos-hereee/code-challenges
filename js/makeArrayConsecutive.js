/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday,
each statue having an non-negative integer size. Since he likes to make things perfect, 
he wants to arrange them from smallest to largest so that each statue will be bigger than 
the previous one exactly by 1. He may need some additional statues to be able to accomplish 
that. Help him figure out the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.

UNDERSTAND:
  given an array of numbers, The user wants to sort the numbers from smallest and the largest 
  but its missing some numbers find the how many numbers are missing for it to be continues

PLAN: 
  First find the length of the array, then find the smallest and largest numbers
  subtract the smallest from the biggest to find total number that are supposed to be in the array, 
  then subtract the total numbers on the array to the length of the array 
*/

const statues = [6, 2, 3, 8];
function consecutiveArray(arr) {
  // find the smallest and largest numbers
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  //   subtract the smallest from the biggest to find total number that are supposed to be in the array,
  //   then subtract the total numbers on the array to the length of the array
  return max - min - arr.length + 1;
}

console.log("consecutiveArray", consecutiveArray(statues));
