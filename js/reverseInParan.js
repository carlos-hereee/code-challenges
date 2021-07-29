/*
  Write a function that reverses characters in (possibly nested) parentheses in the input string.

  Input strings will always be well-formed with matching ()s.
  UNDERSTAND: 
    the input strings will always have a open and closed paran
    the output does not contain the parans
    there can be multiple parans
    if there is 2 opening parans before the closing parans the parans inside
      get cancelled
    which means there can never be any nested reversals
    

  PLAN: 
    // keep track of the reverse word
    // keep track if the open paran 
    // iterate trough the string and check for open parans
    // if found cut the line by add the next letters infront of the last letter 
    // until a closing paran has been found 
    // once found go back to adding the word to the end 

    find the last parans "("
    find the next parens ")"
    reverse the string with the 
*/

// const a = "(bar)";
const a = "foo(bar)baz";

const reverseInParentheses = (inputString) => {
  if (inputString.includes("(")) {
    return reverseInParentheses(recurReverse(inputString));
  }
  return inputString;
};
const recurReverse = (s) => {
  const reg = /\(([^()]*)\)/i;
  let substr = reg.exec(s)[1];
  substr = substr.split("").reverse().join("");
  return s.replace(reg, substr);
};
console.log("reverse : ", reverse(a));
