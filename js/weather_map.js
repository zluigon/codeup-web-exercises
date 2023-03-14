// (function () {
"use strict";

$(document).ready(function () {
	
	mapboxgl.accessToken = MAPBOX_KEY;
	
	const map = new mapboxgl.Map({
		container: 'map', // container ID
		style: 'mapbox://styles/mapbox/streets-v12', // style URL
		center: [-74.11, 40.98], // starting position [lng, lat]
		zoom: 5, // starting zoom
	});
	
	let weatherLocale = {
		lat: 40.98,
		lon: -74.11,
		appid: OPEN_WEATHER_APPID,
		units: "imperial"
	}
	
	const marker = new mapboxgl.Marker({
		draggable: true
	})
		.setLngLat([-74.11, 40.98])
		.addTo(map);
	
	function onDragEnd() {
		const lngLat = marker.getLngLat();
		console.log(`Longitude: ${lngLat.lng}, Latitude: ${lngLat.lat}`);
		let lat = lngLat.lat
		let lng = lngLat.lng
		console.log(lngLat);
		weatherLocale.lon = lng
		weatherLocale.lat = lat
	}
	
	marker.on('dragend', onDragEnd);
	
	$("#myBtn").click(function (e) {
		e.preventDefault();
		let userInput = $("#searchInput").val();
		console.log(userInput);
		geocode(userInput, MAPBOX_KEY).then(function (results) {
			console.log(results[0]); //lon
			console.log(results[1]); //lat
			weatherLocale.lon = results[0]
			weatherLocale.lat = results[1]
			buildWeather();
		});
	});
	
	function buildWeather() {
		
		$.get("http://api.openweathermap.org/data/3.0/onecall", weatherLocale)
			.done(function (data) {
				console.log(data);
				
				function parseDate(timestamp) {
					return new Date(timestamp * 1000).toLocaleDateString();
				}
				
				let dayOneDate = parseDate(data.daily[0].dt); //current day
				let dayTwoDate = parseDate(data.daily[1].dt)
				let dayThreeDate = parseDate(data.daily[2].dt)
				let dayFourDate = parseDate(data.daily[3].dt)
				let dayFiveDate = parseDate(data.daily[4].dt)
				
				function parseTime(timestamp) {
					return new Date(timestamp * 1000).toLocaleString([], {hour: '2-digit', minute: '2-digit'});
				}
				
				let dayOneSunrise = parseTime(data.current.sunrise);
				let dayOneSunset = parseTime(data.current.sunset);
				console.log(dayOneSunrise);
				console.log(dayOneSunset);
				
				$("#current-weather").html(`<h4>Today's Weather: ${dayOneDate}</h4>
													<h4>${data.current.weather[0].main},  ${Math.floor(data.current.temp)}&deg;</h4>
													<img src="http://openweathermap.org/img/w/${data.current.weather[0].icon}.png">
													<h5>H: ${Math.floor(data.daily[0].temp.max)}&deg;, L: ${Math.floor(data.daily[0].temp.min)}&deg; </h5>`);
				$("#current-misc").html(`<h4>Feels like: ${Math.floor(data.current.feels_like)}&deg;</h4>
													<h4>Humidity: ${Math.floor(data.current.humidity)}%</h4>
													<h4>Wind Speed: ${Math.floor(data.current.wind_speed)} MPH</h4>
													<h4>Sunrise/Sunset: ${dayOneSunrise}/ ${dayOneSunset}</h4>`)
				$("#day-1").html(`<h4>${dayTwoDate}</h4>
													<h4>${data.daily[1].weather[0].main},  ${Math.floor(data.current.temp)}&deg;</h4>
													<img src="http://openweathermap.org/img/w/${data.daily[1].weather[0].icon}.png">
													<h5>H: ${Math.floor(data.daily[1].temp.max)}&deg;, L: ${Math.floor(data.daily[1].temp.min)}&deg; </h5>`);
				$("#day-2").html(`<h4>${dayThreeDate}</h4>
													<h4>${data.daily[2].weather[0].main},  ${Math.floor(data.current.temp)}&deg;</h4>
													<img src="http://openweathermap.org/img/w/${data.daily[2].weather[0].icon}.png">
													<h5>H: ${Math.floor(data.daily[2].temp.max)}&deg;, L: ${Math.floor(data.daily[2].temp.min)}&deg; </h5>`);
				$("#day-3").html(`<h4>${dayFourDate}</h4>
													<h4>${data.daily[3].weather[0].main},  ${Math.floor(data.current.temp)}&deg;</h4>
													<img src="http://openweathermap.org/img/w/${data.daily[3].weather[0].icon}.png">
													<h5>H: ${Math.floor(data.daily[3].temp.max)}&deg;, L: ${Math.floor(data.daily[3].temp.min)}&deg; </h5>`);
				$("#day-4").html(`<h4>${dayFiveDate}</h4>
													<h4>${data.daily[4].weather[0].main},  ${Math.floor(data.current.temp)}&deg;</h4>
													<img src="http://openweathermap.org/img/w/${data.daily[4].weather[0].icon}.png">
													<h5>H: ${Math.floor(data.daily[4].temp.max)}&deg;, L: ${Math.floor(data.daily[4].temp.min)}&deg; </h5>`);
				
				
			});
	}
	
	buildWeather([-74.11, 40.98]);
});
// })();


// $.get("http://api.openweathermap.org/data/2.5/weather", weatherLocale).done(function (data) {
// 	// const marker = new mapboxgl.Marker({
// 	// 	draggable: true
// 	// })
// 	// 		.setLngLat(results)
// 	// 		.addTo(map);
// 	//
// 	// map.flyTo({
// 	// 	center: results,
// 	// 	zoom: 10
// 	// })
// 	let html = "";
// 	html += `<h4>Current location: ${data.name}</h4>`;
// 	html += `<h4>Current weather: ${data.weather[0].description}</h4>`;
// 	html += `<h5>Current average wind speed: ${parseInt(data.wind.speed)} knots</h5>`;
// 	html += `<h5>Current Temperature: ${parseInt(data.main.temp)} &deg;</h5>`;
// 	html += `<h5>Current humidity: ${parseInt(data.main.humidity)}</h5>`;
//
// 	$("#weatherBody").html(html);
// 	$("#currentLocation").text(`Current location: ${$("#searchInput").val()}`);
// });

