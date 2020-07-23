/**
 U: 
    there is a line of people, a person can bribe another person in line by 1
    any person in the line can bribe the person directly in front of them to swap
    places. if two people swap position, they still wear the same sticker denoting 
    their original places in line. 

    For example if n = 8
    and person 5 bribes 4
    the queue will look like 1, 2, 3, 5, 4, 6, 7, 8 

    return the mininum number of bribes neccessary, or Too chaotic if the line 
    configuration is not possible 

    q: an array of integers

    the first line contains an integer t, the number of test cases
    ea ch of the next t pairs: 
        - The first line contains an interger, the number of people in the queue
        - the second line has n space-separated integers decribing final state of 
            queue
    
P: 
    for each test case, traverse the array 
    if the number is greater than position of the array 
        if its by more than 2
            add "Too chaotic" to a list and move to next text
        else its less than 2 add count by 1 and move on to next position
    
    
 */
// const q = [1, 2, 5, 3, 7, 8, 6, 4];
// const q = [2, 1, 5, 3, 4];
// const q = [2, 5, 1, 3, 4];

function minimunBribes(q) {
	//  keep track of the minimun bribe
	let bribe = 0;
	//  traverse the array
	for (let i = 0; i < q.length; i++) {
		// if i is greater than the next on list
		if (q[i] > q[i + 1]) {
			// if its by more than 2
			if (q[i] - q[i + 1] > 2) return "Too chaotic";
			bribe += q[i] - q[i + 1];
		}
	}
	return bribe;
}

console.log("minumunBribes", minimunBribes(q));
