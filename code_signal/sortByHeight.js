/*
  Some people are standing in a row in a park. There are trees between them which cannot be moved. 
  Your task is to rearrange the people by their heights in a non-descending order without moving 
  the trees. People can be very tall!

  Example

  For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
  sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

  UDERSTAND: 
    given an array a rearrange everyone so that the are in accending order
    if we encounter a -1 then it is a tree and that position cannot be moved
    all heights 1 or heigher 
    becuase there could be multiple -1 finding the min of the arr is not possible 
    traverse the arr and add the greatest values first 

    

  PLAN: 
    keep track of the new order
    keep track of the current index 
    traverse arr in reverse order (while loop instead of for)
      if the current element on the list is -1
         add -1 to the new order
      else the current element is greater than -1
        search the max and add it to end of the new order
      remove the last element off the arr 
      -1 the current index

*/
const a = [-1, 150, 190, 170, -1, -1, 160, 180];

const sortByHeight = (a) => {
  const dub = [...a];
  // keep track of the new order
  const new_order = {};
  // traverse arr
  for (let i = a.length; i > 0; i--) {
    if (a[i - 1] === -1) {
      new_order[i] = a[i - 1];
      dub.splice(dub.indexOf(a[i - 1]), 1);
    } else {
      new_order[i] = Math.max(...dub);
      dub.splice(dub.indexOf(Math.max(...dub)), 1);
    }
  }
  return Object.values(new_order);
};

console.log("sortByHeight", sortByHeight(a));
