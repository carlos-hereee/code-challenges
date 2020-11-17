/**
 * After becoming famous, the CodeBots decided to move into a new building together. 
 * Each of the rooms has a different cost, and some of them are free, but there's a 
 * rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, 
 * they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

  Given matrix, a rectangular matrix of integers, where each value represents the cost of the 
  room, your task is to return the total sum of all rooms that are suitable for the CodeBots 
  (ie: add up all the values that don't appear below a 0).

    Example

    For

    matrix = [[0, 1, 1, 2], 
              [0, 5, 0, 0], 
              [2, 0, 3, 3]]
    the output should be
    matrixElementsSum(matrix) = 9.

    UNDERSTAND: 
      Given matrix, add any numbers together that the does not have a 0 below it
      if the first floor has a zero all of the numbers in that file wont be added up
    PLAN: 
      1. keep track of the files that do not have a 0
      2. keep track of the cost of the rooms
      3. traverse the matrix, then traverse the first array, 
      4. check if the current file is in the haunted files
      5  if they skip, if not add the cost 
      
      */

const matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];

function matrixElementsSum(matrix) {
  //  1. keep track of the files that do not have a 0
  const haunted = [];
  //  2. keep track of the cost of the rooms
  let cost = 0;
  //  3. traverse the matrix, then traverse the first array,
  for (let i = 0; i < matrix.length; i++) {
    const building = matrix[i];
    for (let n = 0; n < building.length; n++) {
      //  4. check if the current file is in the haunted files
      const room = building[n];
      if (!haunted.includes(n)) cost += room;
      //  5  if they skip, if not add the cost
      if (room === 0) haunted.push(n);
    }
  }
  return cost;
}

console.log("matrixElementsSum", matrixElementsSum(matrix));
