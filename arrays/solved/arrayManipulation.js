/**\
 * Starting with a 1-indexed array of zeros and a list of operations, 
 * for each operation add a value to each of the array element between 
 * two given indices, inclusive. Once all operations have been performed, 
 * return the maximum value in the array.

Example
  n= 10
  queries = [[1,5,3], [4,8,7],[6,9,1]]

Queries are interpreted as follows:
    a b k
    1 5 3
    4 8 7
    6 9 1
Add the values of  between the indices  and  inclusive:

index->	 1 2 3  4  5 6 7 8 9 10
	[0,0,0, 0, 0,0,0,0,0, 0]
	[3,3,3, 3, 3,0,0,0,0, 0]
	[3,3,3,10,10,7,7,7,0, 0]
	[3,3,3,10,10,8,8,8,1, 0]
The largest value is 10 after all operations are performed.


UNDERSTAND:   
  The function will take 2 parameter n = the number of elements in the array
  and array of array q[3] = a two dimmensional array of queries where each queries 
  contains 3 numbers a, b, k
  and will return a number; the maximum value in the resultant array

  n will be the number of total slots available 
  create a new array and  append the k values in the indexes of the new array, 
  index a - b will be given the value of k 
  if there is any collisions add the new and old values 

  return the index value who has the maximum value

PLAN: 
  keep track of the new array
  traverse the queries
  starting at first index to the second index add k value to the new array
  if there is a collision add the values 


 */
const n = 5;
const queries = [
  [1, 2, 100],
  [2, 5, 100],
  [3, 4, 100],
];

function manipulation(n, queries) {
  // create the new array
  const line = Array(n).fill(0);
  // traverse the queries
  for (let i = 0; i < queries.length; i++) {
    const current = queries[i];
    // add the index value k to the index of the new array
    const a = current[0];
    const b = current[1];
    const k = current[2];
    for (let index = a - 1; index < b; index++) {
      line[index] += k;
    }
  }
  return Math.max(...line);
}

console.log("manipulation(arr)", manipulation(n, queries));
