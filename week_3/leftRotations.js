/**
 A left rotation shift the arrays element 1 unit to the the left

 if 2 rotaions on
 [1, 2,3, 4,5 ]
 outputs: 
 [3,4,5,1,2]

 Given an array a and n integers and a number d
 perform  rotations on the array
 return the updated array


 U: 
    Given an array of numbers move each element to the back of the array
    this is considered 1 rotation 
    perform this cycle d times
    return the updated array

P: traverse the array, find the legnth of the array 
    use d % length of array to find the new array position
    return the new array
 */

const n = [1, 2, 3, 4, 5];
const d = 4;

function leftRotation(n, d) {
	// keep track of the new array
	const rotated = {};
	const len = n.length;
	// traverse the array
	for (let i = 0; i < len; i++) {
		// find the position i +d modolo len
		let position = (i + d) % len;
		// add rotated with current position with new value to object
		rotated[i] = n[position];
	}

	return Object.values(rotated);
}

console.log("leftRotation(", leftRotation(n, d));
