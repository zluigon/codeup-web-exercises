(function() {
	"use strict";
	
	/**
	 * TODO:
	 * Create an object with firstName and lastName properties that are strings
	 * with your first and last name. Store this object in a variable named
	 * `person`.
	 *
	 * Example:
	 *  > console.log(person.firstName) // "Rick"
	 *  > console.log(person.lastName) // "Sanchez"
	 */
	
	const person = {
		firstName: "Luis",
		lastName: "Gonzalez",
	}
	
	console.log(person.firstName);
	console.log(person.lastName);
	
	/**
	 * TODO:
	 * Add a sayHello method to the person object that returns a greeting using
	 * the firstName and lastName properties.
	 * console.log the returned message to check your work
	 *
	 * Example
	 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
	 */
	
	person.sayHello = function (){
		console.log("Hello from " + person.firstName + " " + person.lastName + "!");
	}
	
	person.sayHello();
	
	/** TODO:
	 * HEB has an offer for the shoppers that buy products amounting to
	 * more than $200. If a shopper spends more than $200, they get a 12%
	 * discount.
	 *
	 * Write a JS program, using conditionals, that logs to the
	 * browser, how much Ryan, Cameron and George need to pay. We know that
	 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
	 * display a line with the name of the person, the amount before the
	 * discount, the discount, if any, and the amount after the discount.
	 *
	 * Uncomment the lines below to create an array of objects where each object
	 * represents one shopper.
	 * Use a foreach loop to iterate through the array,
	 * and console.log the relevant messages for each person
	 */
	
	const shoppers = [
	    {name: 'Cameron', amount: 180},
	    {name: 'Ryan', amount: 250},
	    {name: 'George', amount: 320}
	];
	
	const spendMoreThan = 200;
	const discountOffer = 0.12;
	
	
	shoppers.forEach(function (shopper){
		// console.log(shopper.name + " has spent $" + shopper.amount + ".");
		if (shopper.amount > spendMoreThan) {
			let discount = shopper.amount * discountOffer;
			let discountedAmount = shopper.amount - discount;
			console.log(shopper.name + " has spent $" + shopper.amount + ". Thus, qualifying for the HEB discount. " + shopper.name + "'s new total after applying the " + discountOffer + "% is $" + discountedAmount + ". Saving $" + discount);
		} else {
			console.log(shopper.name + " has spent $" + shopper.amount + ". Unfortunately, the HEB discount only applies on purchases totaling over $" + spendMoreThan + ".");
		}
	})
	
	/** TODO:
	 * Create an array of objects that represent books and store it in a
	 * variable named `books`. Each object should have a title and an author
	 * property. The author property should be an object with properties
	 * `firstName` and `lastName`. Be creative and add at least 5 books to the
	 * array
	 *
	 * Example:
	 * > console.log(books[0].title) // "The Salmon of Doubt"
	 * > console.log(books[0].author.firstName) // "Douglas"
	 * > console.log(books[0].author.lastName) // "Adams"
	 */
	
	const books = [
		{
			title: "The Shining",
			author: {
				firstName: "Stephen",
				lastName: "King",
			}
		},
		{
			title: "The Haunting of Hill House",
			author: {
				firstName: "Shirley",
				lastName: "Jackson",
			}
		},
		{
			title: "Dracula",
			author: {
				firstName: "Bram",
				lastName: "Stoker",
			}
		},
		{
			title: "Red Dragon",
			author: {
				firstName: "Thomas",
				lastName: "Harris",
			}
		},
		{
			title: "Carrion Comfort",
			author: {
				firstName: "Dan",
				lastName: "Simmons",
			}
		}
	]
	
	console.log(books[3].title);
	console.log(books[3].author.firstName);
	console.log(books[3].author.lastName);
	
	
	/**
	 * TODO:
	 * Loop through the books array and output the following information about
	 * each book:
	 * - the book number (use the index of the book in the array)
	 * - the book title
	 * - author's full name (first name + last name)
	 *
	 * Example Console Output:
	 *
	 *      Book # 1
	 *      Title: The Salmon of Doubt
	 *      Author: Douglas Adams
	 *      ---
	 *      Book # 2
	 *      Title: Walkaway
	 *      Author: Cory Doctorow
	 *      ---
	 *      Book # 3
	 *      Title: A Brief History of Time
	 *      Author: Stephen Hawking
	 *      ---
	 *      ...
	 */
	
	// "\n" - newline. Creates new line in JS and console log
	books.forEach(function (book){
		console.log("Book # " + (books.indexOf(book) + 1) + "\n" +"Title: " + book.title + "\n" + "Author: " + book.author.firstName + " " + book.author.lastName);
	})
	
	console.log("-- refactored forEach --")
	books.forEach(showBookInfo);
	
	/**
	 * Bonus:
	 * - Create a function named `createBook` that accepts a title and author
	 *   name and returns a book object with the properties described
	 *   previously. Refactor your code that creates the books array to instead
	 *   use your function.
	 *   
	 */ 
	 
	function createBook(title,firstName,lastName){
		return {
			title: title,
			author: {
				firstName: firstName,
				lastName: lastName,
			}
		}
	}
	
	console.log(createBook("Heart-Shaped Box","Joe","Hill"));
	console.log(createBook("Manhunt","Gretchen","Felker-Martin"));
	console.log(createBook("A Black and Endless Sky","Matthew","Lyons"));
	
	 /**
	 * - Create a function named `showBookInfo` that accepts a book object and
	 *   outputs the information described above. Refactor your loop to use your
	 *   `showBookInfo` function.
	 */
	
	 const book = {
		 title: "The Hollow Kind",
		 author: {
			 firstName: "Andy",
			 lastName: "Davidson",
		 }
	 }
	 
	 function showBookInfo(input,index){
		 console.log("Book # " + (index + 1) + "\n" + "Title: " + input.title + "\n" + "Author: " + input.author.firstName + " " + input.author.lastName);
	 }
	 
	 showBookInfo(book);
// 	 Book # NaN because an object outside an array has an undefined index. Thus adding (undefined + 1) returns NaN
	 
})();