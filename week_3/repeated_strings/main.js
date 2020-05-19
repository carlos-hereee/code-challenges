/**
 * Refactoring problem to js
 */

function repeated_string(s, n) {
	/**
     * 
    s = is a string to repeat
    n = the number of a characters to consider
 
    n will be the length of the new string
    then we will need to return the number of `a`s
 
    find the ratio of a to all the other letters
    keep track of the a's
     */
	let a_counter = 0;
	//  traverse the string 's' for a's
	for (let i = 0; i < s.length; i++) {
		// check if the letter is a
		if (s[i] === "a") {
			// # add 1
			a_counter += 1;
		}
	}
	// # a:total and  x: n
	// # find the ratio  is ratio = (a_counter*n)/len(s)
	const a_ratio = (a_counter * n) / s.length;
	return Math.ceil(a_ratio);
}

// this is opimized solution
function repeatedString(s, n) {
	const counta = (str) => str.split("").filter((c) => c == "a").length;

	const d = Math.floor(n / s.length);
	const r = n - s.length * d;
	return d * counta(s) + counta(s.substr(0, r));
}
