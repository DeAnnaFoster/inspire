function WeatherController() {
	var weatherService = new WeatherService();
	var scale = 'F';

	weatherService.getWeather(function (weather) {
		//What can you do with this weather object?
		//er...weather the storm...depending 'weather' or not you want to.

		drawWeather(weather);
	})

	function drawWeather(weather) {
		var template = '';
		var iconCode = weather.weather[0].icon;
		var imgIcon = 'http://openweathermap.org/img/w/' + iconCode + '.png';

		var temp = (weather.main.temp).toFixed(1);//going to be in Fahrenheit default
		if (scale == 'C') {
			temp = ((temp - 32) / 1.8).toFixed(1);
		}

		//icon url is:
		//http://openweathermap.org/img/w/10d.png
		template += `
			<div class="row top"><img src='${imgIcon}'> <div class="temp" onclick="app.controllers.weatherController.scaleToggle()"> ${temp} ${scale}</div></div>
			<div class="row area"><div class="area">${weather.name}</div></div>
			`
		document.getElementById("weather").innerHTML = template;
	}

	this.scaleToggle = function () {
		if (scale == 'F') {
			scale = 'C';
		}

		weatherService.getWeather(function (weather) {

			drawWeather(weather);
		});
	}
}
