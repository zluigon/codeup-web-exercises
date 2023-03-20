fetch('https://api.github.com/repos/zluigon/codeup-web-exercises/commits', {headers: {'Authorization': gitHubAPI_token}})
	.then(response => response.json())
	.then(data => {
		console.log(data)
		console.log(`Last updated: ${data[0].commit.author.date}`)
	});

// Testing Endpoints

// https://api.github.com/users/zluigon/events/public
// https://api.github.com/repos/zluigon/codeup-web-exercises/commits

let gitUser = (user) => {
	fetch(`https://api.github.com/users/${user}/events`,
		{headers: {'Authorization': gitHubAPI_token}})
		.then(response => response.json())
		.then(data => {
			console.log(data)
			console.log(`Last updated: ${data[0].created_at}`)
		})
}

// Bonus
function wait(num) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() > 0.5) {
				resolve("Here is your data: ...");
			} else {
				reject("Network Connection Error!");
			}
		}, num);
	});
}

wait(1000).then(() => console.log("You'll see this after 1 second"));
wait(3000).then(() => console.log("You'll see this after 3 second"));