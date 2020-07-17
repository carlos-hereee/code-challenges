/**
 given A an array and size N, each location has a unique index, print each element
 in reverse order as a single line of space separated integers 

 for example if given 
 [1, 4, 3, 2 ]
 output 
 2 3 4 1 

 U: 
    Given an array switch the order of the array

P: 
 */

const a = [1, 4, 3, 2];

function reverseArray(a) {
	// get the length of array
	let len = a.length;
	// keep track of the order
	const reverse = {};
	// traverse the array
	for (let i = 0; i < a.length; i++) {
		// get the order
		reverse[len] = a[i];
		// get next on the list
		len -= 1;
	}

	return Object.values(reverse);
}

console.log("reverseArray(a)", reverseArray(a)); // 2 , 3 , 4, 1
