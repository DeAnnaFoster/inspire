function WeatherController(){
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		//console.log(weather);
		//What can you do with this weather object?

		drawWeather(weather);
	})

	function drawWeather(weather){
		var template = '';
		var iconCode  = weather.weather[0].icon;
		var imgIcon = 'http://openweathermap.org/img/w/'+ iconCode +'.png';
		//icon url is:
		//http://openweathermap.org/img/w/10d.png
		template += `
				<div>${weather.name} ${weather.main.temp} <img src='${imgIcon}'></div>
			`
		document.getElementById("weather").innerHTML = template;
	}
}
