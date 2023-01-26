"use strict";

/* TODO:
    Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

*/

function showMultiplicationTable(number){
	for (let i = 0; i < 10; i++) {
		let multiplyBy = i + 1;
		console.log(number + " x " + multiplyBy + " = " +(number * multiplyBy));
	}
}

showMultiplicationTable((generateNumber()));

/* TODO:
    Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and
     output to the console whether each number is odd or even.
*/

function generateNumber(){
	return Math.floor(Math.random()*(200-20)+20);
}

function isEvenOdd(number) {
	if (number % 2 === 0){
		return (number + " is even");
	} else{
		return (number + " is odd");
	}
}

function numberCheck() {
	for (let i = 0; i < 10; i++) {
		let randomNumber = generateNumber();
		let remainderCheck = isEvenOdd(randomNumber);
		console.log(remainderCheck);
	}
}

numberCheck();

/*TODO:
   Create a for loop that uses console.log to create the output shown below.
   1
   22
   333
   4444
   55555
   666666
   7777777
   88888888
   999999999
*/

function numberTree() {
	for (let i = 0; i < 9; i++) {
		let numberBranch = ""; //while i < 9, create empty string
		for (let b = 0; b < i + 1; b++){
			numberBranch += i + 1; //while b < i + 1, "" = "" + (i+1) > "1" concat/coercion
		} console.log((numberBranch));
	}
}

numberTree();

/*TODO:Create a for loop that uses console.log to create the output shown below.
   100
   95
   90
   85
   80
   75
   70
   65
   60
   55
   50
   45
   40
   35
   30
   25
   20
   15
   10
   5
*/

function minusFive(){
	for(let i = 100; i > 0; i = i-5){
		console.log(i)
	}
}

minusFive();