/*
Bigger is Greater https://www.hackerrank.com/challenges/bigger-is-greater/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

Understanding the Problem

Given a word, create a new word by swapping some or all of its characters.
    This new word must meet two criteria:
*   it must be greater than the original word
*   it must be smallest word that meets first condition
*	I can only use the original letters


For example: 
	given the word W= abcd, the next greater word is abdc the greater the position
	the alphabet the greater the value
	because "a" > "b" is false
	and 	"a" < "b" is true it can be view as
			 1  > 2	 is false
			 1  < 2	 is true

Find the Greater string if it is the same return no answer

Plan 
	- traverse the string from right to left
	- as you are traversing compare the letter you are on to next one
		 until you find a smaller letter
	- if found swap the letters 
	- from the current place letters in accessing order

	
*/
/**
 * 
 def biggerIsGreater(w):
 min_diff = float("inf")
 smallest_letter_index = 0
    chars = list(w)
    # alphabet = "abcdefghijklmnopqrstuvwxyz"
    # traverse the string right to left
    for i in reversed(range(1, len(chars))): 
	# compare the current letter to the letter to the left of the current 
	# if the letter to the left of the current is smaller 
	if chars[i] > chars[i-1]:
	# we need to swap the left character with another 
	# loop over all characters to the right 
	for j in range(i, len(chars)):
	# subtract current character from 
	diff = ord(chars[j]) - ord(chars[i-1])
                if diff > 0 and diff < min_diff:
				min_diff = ord(chars[j]) - ord(chars[i-1])
				smallest_letter_index = j
				chars[i-1], chars[smallest_letter_index] = chars[smallest_letter_index], chars[i-1]
				# sort the rest of the characters after the swapped character 
				return "".join(chars[:i] + sorted(chars[i:]))
				​
				return "no answer"
				*/

const w = "abcd";

function biggerIsGreater(w) {
	// keep track of the current position
	let current = w.length;

	// change current pointer
	for (let n = current; n > 0; n--) {
		// err handling
		if (n <= 1) return "no answer";
		//traverse the string
		for (let i = w.length; i > 0; i--) {
			if (w[n - 1] < w[i - 1]) {
			}
		}
	}
	return "no answer";
}

console.log(biggerIsGreater(w)); // output abdc
// console.log("abcd" < "abdc", w.length); // output abdc
