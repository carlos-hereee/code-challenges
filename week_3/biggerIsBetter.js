/*
Bigger is Greater https://www.hackerrank.com/challenges/bigger-is-greater/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

Understanding the Problem

-   Given a word, create a new world by swapping some or all of its characters.
    This new word must meet two criteria:

*   it must be greater than the original word
*   it must be smalleset wowrd that meets first condition

For example: given the word W= abcd, the next greater word is abdc

Find the Greater string if it is the same return no answer


Plan 

1. Create an object for the every letter in the word
2. Traverse the string and add the every letter to the object with key of the placement in the string
3. Move keys to create a new string with the different keys
4. If the new string is greater than the orginal string return the new string 
5. else continue comparing 
6. If we get to the end of the comparing them and there is not greater string return no answer
*/

function biggerIsGreater(w) {
	const wordObject = {};
	for (let i = 0; i < w.length; i++) {}
}
