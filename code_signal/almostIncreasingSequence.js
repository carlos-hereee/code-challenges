/**
 * Given a sequence of integers as an array, determine whether it is possible to obtain 
 * a strictly increasing sequence by removing no more than one element from the array.

  Note: sequence a0, a1, ..., an is considered to be a strictly increasing 
  if a0 < a1 < ... < an. Sequence containing only one element is also 
  considered to be strictly increasing.

  Example
  For sequence = [1, 3, 2, 1], the output should be
  almostIncreasingSequence(sequence) = false.

  There is no one element in this array that can be removed in order 
  to get a strictly increasing sequence.

  For sequence = [1, 3, 2], the output should be
  almostIncreasingSequence(sequence) = true.

  You can remove 3 from the array to get the strictly increasing sequence [1, 2]. 
  Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

  UNDERSTAND: 
    Given an array of numbers, find out if the array is in ascending order
    I'm going to have to traverse the array and check if the array is in ascending order
    If it is return true, 
    If its not true create a counter of 2 so that it can return a 1 or a 0
    if only 1 is returned that means there was only 1 decesing number
    if its 0 there was 2 or more and should return false

    PLAN: 
    create a counter of 2 
    traverse the array
    if a number is desending order decrease the counter by 1
    check if the counter is at 0 if its at 0 return false    
    */
const sequence = [1, 2, 1, 2];
// const sequence = [1, 3, 2, 1];
// const sequence = [1, 3, 2]
// const sequence = [1, 1, 2, 3, 4, 4];
function almostIncreasingSequence(sequence) {
  var found = false;
  for (var i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      if (found) {
        return false;
      }
      found = true;

      if (i === 1 || i + 1 === sequence.length) {
        continue;
      } else if (sequence[i] > sequence[i - 2]) {
        sequence[i - 1] = sequence[i - 2];
      } else if (sequence[i - 1] >= sequence[i + 1]) {
        return false;
      }
    }
  }
  return true;
}
console.log("almostIncreasingSequence", almostIncreasingSequence(sequence));
