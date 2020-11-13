/**
 * Problem
 * Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.

UNDERSTAND: 
  From the array of find the largest number and then find the largest numbers that's adjence to the largest  
  then return the multiplication of that number

PLAN: 
  1. we have to keep track of the largest number
  2. traverse the array to find the largest number
  3. if the index is larger than than the largest number replace the number
  4. if not continue traversing
  5. after we found the largest number check if the number before and after it to find the largest
  6. once found return the product
  */
/*
REFLECT: 
  Update: while traversing we also have to keep track of the index
*/
const inputArray = [3, 6, -2, -5, 7, 3];
function adjacentElementProduct(arr) {
  //  1. we have to keep track of the largest number
  let largest_number = null;
  // 7. keep track of the index
  let largest_number_index = null;
  //  2. traverse the array to find the largest number
  for (let i = 0; i < arr.length; i++) {
    const index_number = arr[i];
    //  3. if the index is larger than than the largest number replace the number
    if (index_number > largest_number) {
      largest_number = index_number;
      largest_number_index = i;
    }
    //  4. if not continue traversing
  }
  //  5. after we found the largest number check if the number before and after it to find the largest
  //  6. once found return the product
  if (arr[largest_number_index - 1] > arr[largest_number_index + 1]) {
    return arr[largest_number_index - 1] * arr[largest_number_index];
  }
  return arr[largest_number_index + 1] * arr[largest_number_index];
}

/**
 REFLECT: 
  They are asking the largest product not the product of the largest numbers' pairs
 UNDERSTAND: 
    From the largest product of pairs for the array that's given
  PLAN: 
    1. keep track of the largest number
    2. traverse the arr
    3. while traversing the list find the product of pairs 
    4. if the  product is more than largest product replace
    
    */

const array = [5, 1, 2, 3, 1, 4];

function fun(arr) {
  // 1. keep track of the largest number
  let largest_product = -Infinity;
  // 2. traverse the arr
  for (let i = 0; i < arr.length; i++) {
    const index = arr[i];
    // 3. while traversing the list find the product of pairs
    if (index * arr[i + 1] > largest_product) {
      // 4. if the  product is more than largest product replace
      largest_product = index * arr[i + 1];
    }
  }
  return largest_product;
}
console.log("fun()", fun(array));
