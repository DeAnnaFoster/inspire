function WeatherService() {
	var url = '//bcw-getter.herokuapp.com/?url=';
	var units = '&units=imperial'
	var url2 = 'http://api.openweathermap.org/data/2.5/weather?q=boise'+ units +'&&APPID=bd82255fd0a21fa1238699b9eda2ee35'
	var apiUrl = url + encodeURIComponent(url2);

	this.getWeather = function (callWhenDone) {
		$.get(apiUrl, function (res) {
			res = JSON.parse(res)
			localStorage.setItem('weather', JSON.stringify(res))
			// HEY FUN FACT 
			// Have you ever wanted to know the temperature measured in kelvin?
			// NOPE. Not since physics and electronics classes
			// You should probably convert the temperature data
			// I'd rather just grab the data I need if at all possible.
			callWhenDone(res);
		})
	}
}
