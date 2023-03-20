fetch('https://api.github.com/repos/zluigon/codeup-web-exercises/commits', {headers: {'Authorization': gitHubAPI_token}})
	.then(response => response.json())
	.then(data => {
		console.log(data)
		console.log(`Last updated: ${data[0].commit.author.date}`)
	});

let gitUser = (user) => {
	fetch(`https://api.github.com/users/${user}/events`,
		{headers: {'Authorization': gitHubAPI_token}})
		.then(response => response.json())
		.then(data => {
			console.log(data)
			console.log(`Last updated: ${data[0].created_at}`)
		})
}


// https://api.github.com/users/zluigon/events/public

// https://api.github.com/repos/zluigon/codeup-web-exercises/commits