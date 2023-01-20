(function() {
	"use strict";
	
	
	console.log("Hello from external Javascript");
	
	alert("Welcome to my Website!");
	
	var userInput = prompt("What is your favorite color?");
	alert("Great! " + userInput + " is my favorite color too!");
	
	/*Write some JavaScript code, that is, variables and operators, to describe the following scenarios. */
	
	/* You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay? */
	alert("The rental price of a movie per day is $3.00.")
	const rentalPrice = 3.00;
	var littleMermaidDays = prompt("How many days would you like to rent The Little Mermaid?");
	var littleMermaidTotal = littleMermaidDays * rentalPrice;
	
	var brotherBearDays = prompt("How many days would you like to rent Brother Bear?");
	var brotherBearTotal = brotherBearDays * rentalPrice;
	
	var herculesDays = prompt("How many days would you like to rent Hercules?");
	var herculesTotal = herculesDays * rentalPrice;
	
	var rentalTotal = littleMermaidTotal + brotherBearTotal + herculesTotal;
	alert("Your total is $" + rentalTotal.toFixed(2) + ". " + "You have rented The Little Mermaid for " + littleMermaidDays + " day(s)." + " Brother Bear for a total of " + brotherBearDays + " day(s)." + " And Hercules for " + herculesDays + " day(s).");
	
	/* Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon. */
	var googleHoursWorked = prompt("How many hours did you work for Google this week?");
	var googleHourRate = prompt("What is the hourly rate at Google?");
	var googleTotalPay = googleHoursWorked * parseFloat(googleHourRate);
	
	var amazonHoursWorked = prompt("How many hours did work you for Amazon this week?");
	var amazonHourRate = prompt("What is the hourly rate at Amazon?");
	var amazonTotalPay = amazonHoursWorked * parseFloat(amazonHourRate);
	
	var facebookHoursWorked = prompt("How many hours did you work for Facebook this week?");
	var facebookHourRate = prompt("What is the hourly rate at Facebook?");
	var facebookTotalPay = facebookHoursWorked * parseFloat(facebookHourRate);
	
	var weekTotalPay = googleTotalPay + amazonTotalPay + facebookTotalPay;
	alert("You're total pay for this week combined is $" + weekTotalPay.toFixed(2));
	
	/* A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule. */
	var classNotFull = confirm("Is the class you're wanting to attend full?");
	var noClassConflict = confirm("Does the class time conflict with your schedule?");
	
	var canEnroll = classNotFull && noClassConflict;
	alert("Can enroll at this time: " + canEnroll);
	
	/* A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products. */
	var numOfPurchases = prompt("How many items did you purchase?");
	var numOfItems = parseInt(numOfPurchases) >= 2;
	
	var couponCheck = confirm("Is your coupon expired?");
	var isCouponExpired = couponCheck;
	
	var membershipStatus = confirm("Are you a premium member?");
	var isPremiumMember = membershipStatus;
	
	var applyProductOffer = isCouponExpired && (numOfItems || isPremiumMember);
	if (applyProductOffer === true) {
		alert("Product offer is valid and will be applied.")
	} else {
		alert("Product offer is not valid and will not be applied.")
	}
})();