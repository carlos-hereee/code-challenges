// first problem on code signal
// add a +b
function add(a, b) {
	return a + b;
}

/**
 *  second problem 
 * 
    given a year return a curent centery 
    the first century spans from year 1 to 100
    year 101 is the second centery 

    EXAMPLE: 
         year = 1905 should output 20
         year = 1700 should output 17

*/

// const year = 1905;
const year = 1700;
function centryFromYear(year) {
	return Math.ceil(year / 100);
}
// console.log("centryFromYear(year", centryFromYear(year));

/**
 * 3rd Problem 
    U: 
        check to see if a sting is a palindrone 
            - a word when reversed is still the same word
    
    EXAMPLE 
    aabaa is true
    abac is false

    P: 
        Traverse the sting from both ends and check if the words are the 
        same if not return false

 */
const inputString = "aabaa";

function checkPalindrome(inputString) {
	// variable for last position
	let last = inputString.length - 1;
	for (let i = 0; i < inputString.length; i++) {
		let current = inputString[i];
		if (i >= last) return true;
		if (current !== inputString[last]) return false;
		last -= 1;
	}
}

console.log("checPalinDrome", checkPalindrome(inputString));
