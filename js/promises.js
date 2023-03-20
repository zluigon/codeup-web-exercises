fetch('https://api.github.com/users/zluigon', {headers: {'Authorization': gitHubAPI_token}})
	.then(response => response.json())
	.then(data => {
		console.log(data)
		console.log(`Last updated: ${data.updated_at}`)
	});

let gitUser = (user) => {
	fetch(`https://api.github.com/users/${user}`,
		{headers: {'Authorization': gitHubAPI_token}})
		.then(response => response.json())
		.then(data => {
			console.log(data)
			console.log(`Last updated: ${data.updated_at}`)
		})
}