(function () {
	"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
	function sayHello(name) {
		return 'Hello ' + name + "!";
	}
	
/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */
	
	let helloMessage = sayHello('Luis')
	
	console.log(helloMessage);
	
/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */
	let myName = 'Luis'
	
	console.log(sayHello(myName));
	
// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
	let random = Math.floor((Math.random() * 3) + 1);
	
/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
	function isTwo(number){
		return number === 2;
	}
	console.log(isTwo(random));
	
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
	function calculateTip(tipPercent,billTotal){
		let tipPercentValue = tipPercent/100;
		return (tipPercentValue*billTotal).toFixed(2);
	}
	
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */
	let userBillTotal = prompt("What is the total of your bill?")
	let userTipPercent = prompt("What percent(%) would you like to tip?")
	alert("Your tip total is: $"+ calculateTip(userTipPercent,userBillTotal));
	
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > let originalPrice = 100;
 * > let discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
	
	// Discount function with randomly generated price and discount values.
	alert("This is the discount function with both price and discount randomly generated.")
	
	let discountPercent = (Math.random()).toFixed(2);
	let originalPrice = Math.floor(Math.random()*100);
	function applyDiscount(originalPrice,discountPercent){
		alert("The original price is: $" + originalPrice.toFixed(2));
		alert("The discount percent is: %" + discountPercent);
		return (originalPrice - originalPrice * discountPercent);
	}
	
	alert("The final price with the discount applied is: $"+(applyDiscount(originalPrice,discountPercent).toFixed(2)));
	
	// Discount function with user input.
	alert("This is the discount function with user input.")
	
	let userOriginalPrice = prompt('How much was your purchase today?');
	let userPrice = parseFloat(userOriginalPrice).toFixed(2);
	let userDiscountPercent = prompt('What percentage(%) would you like to discount off the original price?');
	let userDiscount = userDiscountPercent / 100;
	
	function applyUserDiscount(userPrice, userDiscount) {
		return (userPrice - userPrice * userDiscount);
	}
		alert("The original price was: $ " + userPrice);
		alert("The new total with the discount applied is: $" + applyUserDiscount(userPrice,userDiscount).toFixed(2));
})();