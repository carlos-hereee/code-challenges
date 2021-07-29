/*
  Given an array of strings, return another array 
  containing all of its longest strings.

  Example

  For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
  allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

  UNDERSTAND: 
    find the string that has the most characters if multiple strings have the 
    same number of characters as the longest string. 
    if the array has strings with multiple different strings length just add the 
    one that has the most
  
  PLAN: 
    keep track of the longest length
    traverse the array and find the length of every string
    check if the current string's length is longer than the longest 
    if so replace it, 
    after the longest has been found we are going to have to traverse the string 
    again and check if the strings have the length of the longest in length if they do 
    add it to the array of longest strings. 
*/
const inputArray = ["aba", "aa", "ad", "vcd", "aba"];
function allLongestStrings(arr) {
  //  keep track of the longest length
  let longestLen = 0;
  //  keep track of the array
  const longestArr = [];
  //   traverse the array and find the length of every string
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    //   check if the current string's length is longer than the longest
    //   if so replace it,
    if (str.length > longestLen) longestLen = str.length;
  }
  //   after the longest has been found we are going to have to traverse the string
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    //   again and check if the strings have the length of the longest in length if they do
    //   add it to the array of longest strings.
    if (str.length === longestLen) longestArr.push(str);
  }
  return longestArr;
}

console.log("allLongestStrings(inputArray) ", allLongestStrings(inputArray));
