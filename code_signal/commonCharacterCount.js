/* Given two strings, find the number of common characters between them.

  Example

  For s1 = "aabcc" and s2 = "adcaa", the output should be
  commonCharacterCount(s1, s2) = 3.

  Strings have 3 common characters - 2 "a"s and 1 "c".

  UNDERSTAND: 
    Given 2 strings count how many total common characters they have in total
    the number of comman characters will never be greater than the string with the 
    least length in characters. 

  PLAN: 
    Keep track of the number of the total comman characters
    Traverse the first string 
    for every chracter check the characters is included in the second string
    if it is remove that character so that it doesnt get counted again
    then add 1 to the common characters


*/

const s1 = "abca";
const s2 = "xyzbac";
function commonCharacterCount(s1, s2) {
  let total_common_characters = 0;
  const arr = [...s2];
  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    if (arr.includes(char)) {
      total_common_characters += 1;
      const index = arr.indexOf(char);
      arr.splice(index, 1);
    }
  }
  return total_common_characters;
}
console.log(commonCharacterCount(s1, s2));
