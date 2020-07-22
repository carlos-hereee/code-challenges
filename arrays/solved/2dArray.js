/*
Given a 6*6 array

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0 

would be defined as: 

a b c
  d
e f g

There is 16 hourglasses in arr, and an hour glass sum is the sum of an hourglass' values. calculate
the hour glass sum for every hour glas in arr then print the maximun hour glass sum

-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0

we calculate the following 16 hourglass values: 

-63, -34, -9, 12, 
-10, 0, 28, 23, 
-27, -11, -2, 10, 
9, 17, 25, 18

highest value is 28
0 4 3
  1
8 6 6

Function Description

Complete the function hourglassSum in the editor below. It should return an integer, the maximum hourglass sum in the array.

hourglassSum has the following parameter(s):
arr: an array of integers
*/

/**
U:  
    Input an array of arrays, it will display an hourglass(find all posible hourglasses in the array)
    Then find the highest sum in the list 

P: 
    Traverse the array and find all posible hourglasses save them in an object
    return the hourglass with hightest sum and     
 */

const sampleInput = [
	[1, 1, 1, 0, 0, 0],
	[0, 1, 0, 0, 0, 0],
	[1, 1, 1, 0, 0, 0],
	[0, 0, 2, 4, 4, 0],
	[0, 0, 0, 2, 0, 0],
	[0, 0, 1, 2, 4, 0],
];

function hourGlassSum(arr) {
	// keep track of the highiest sum initilize at -63 since
	let highiestSum = -64;
	for (let y = 0; y <= 3; y++) {
		// find all possible hourglass
		for (let x = 0; x <= 3; x++) {
			// sum of top
			let sum = arr[y][x] + arr[y][x + 1] + arr[y][x + 2];
			// sum of middle
			sum += arr[y + 1][x + 1];
			// sum of bottom
			sum += arr[y + 2][x] + arr[y + 2][x + 1] + arr[y + 2][x + 2];
			// find sum of each hourglass and compare to current highiest sum
			if (highiestSum < sum) highiestSum = sum;
		}
	}
	return highiestSum;
}

console.log(hourGlassSum(sampleInput)); //output 19
