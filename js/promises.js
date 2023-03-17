


fetch('https://api.github.com/users/zluigon', {headers: {'Authorization': gitHubAPI_token}}).then(respone => console.log(respone.json()));

// fetch('https://api.github.com/users/zluigon/repos', {headers: {'Authorization': gitHubAPI_token}}).then(respone => console.log(respone.json()));
//

let gitUser = (user) => {
	fetch(`https://api.github.com/users/${user}`, {headers: {'Authorization': gitHubAPI_token}}).then(respone => console.log(respone.json()));
}