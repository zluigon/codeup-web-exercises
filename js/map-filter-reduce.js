const users = [
	{
		id: 1,
		name: 'ryan',
		email: 'ryan@codeup.com',
		languages: ['clojure', 'javascript'],
		yearsOfExperience: 5
	},
	{
		id: 2,
		name: 'luis',
		email: 'luis@codeup.com',
		languages: ['java', 'scala', 'php'],
		yearsOfExperience: 6
	},
	{
		id: 3,
		name: 'zach',
		email: 'zach@codeup.com',
		languages: ['javascript', 'bash'],
		yearsOfExperience: 7
	},
	{
		id: 4,
		name: 'fernando',
		email: 'fernando@codeup.com',
		languages: ['java', 'php', 'sql'],
		yearsOfExperience: 8
	},
	{
		id: 5,
		name: 'justin',
		email: 'justin@codeup.com',
		languages: ['html', 'css', 'javascript', 'php'],
		yearsOfExperience: 9
	}
];

let threeLanguages = users.filter(function (user) {
	return user.languages.length >= 3
});

console.log(threeLanguages);

let userEmails = users.map(function (user) {
	return user.email
});

console.log(userEmails);

let totalYears = users.reduce(function (years, user) {
	return years + user.yearsOfExperience
}, 0);

console.log(`The total amount of experience is ${totalYears} years, with the average being ${totalYears / users.length} years.`);

let longestEmail = users.reduce(function (email, user) {
	// console.log(email)
	// console.log(user)
	if (user.email.length > email.length) {
		return user.email
	} else {
		return email
	}
}, "");

console.log(`The longest email is ${longestEmail}.`);

let userNames = users.reduce(function (names, user) {
	return names + user.name + ", "
}, "List of user names: ");

console.log(userNames);