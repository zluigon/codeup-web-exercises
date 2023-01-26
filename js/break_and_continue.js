"use strict";

/*TODO:
     Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
 */

function userOddNumber(){
	let userNumberPrompt = parseInt(prompt("Please enter an odd number between 1-50"));
	for (let i = 0; i < 15; i++){
		if ((userNumberPrompt % 2 !== 0) && (userNumberPrompt >= 1) && (userNumberPrompt <= 50)) {
			break;
 		} else {
			 userNumberPrompt = parseInt(prompt("The number entered " + userNumberPrompt+ " is invalid. Please enter an odd number between 1-50"));
		}
	}
	console.log("The number entered was: " + userNumberPrompt);
	return userNumberPrompt;
}


/*TODO:
     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
     
     Your output should look like this:
     Number to skip is: 27

	Here is an odd number: 1
	Here is an odd number: 3
	Here is an odd number: 5
	Here is an odd number: 7
	Here is an odd number: 9
	Here is an odd number: 11
	Here is an odd number: 13
	Here is an odd number: 15
	Here is an odd number: 17
	Here is an odd number: 19
	Here is an odd number: 21
	Here is an odd number: 23
	Here is an odd number: 25
	Yikes! Skipping number: 27
	Here is an odd number: 29
	Here is an odd number: 31
	Here is an odd number: 33
	Here is an odd number: 35
	Here is an odd number: 37
	Here is an odd number: 39
	Here is an odd number: 41
	Here is an odd number: 43
	Here is an odd number: 45
	Here is an odd number: 47
	Here is an odd number: 49
*/

function oddNumberList (input) {
	console.log("This number should be skipped: " + input);
	for (let i = 0; i < 50; i++) {
		if ( i % 2 === 0){
			 continue;
		}
		 if ( i !== input) {
			console.log("Here is an odd number: " + i);
		} else {
			console.log("Yikes! Skipping number :" + i);
		}
	}
}

oddNumberList((userOddNumber()));