const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a6484e6bdfmsh10496159871666dp1ad53ejsn6573e8751929',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
getWeather = ( box ) => {
	val = box.toUpperCase();
	    cityName.innerHTML = val ;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + box , options)
    .then(response => response.json())
	.then((response) => {
		if( response.humidity == undefined ){
			humidity.innerHTML = '--' ;
			humidity.innerHTML = '--';
		    temp.innerHTML = '--' ;
		    sunset.innerHTML = '--' ;
		    cloud_pct.innerHTML = '--' ;
		    sunset.innerHTML = '--';
            feels_like.innerHTML = '--' ;
		    wind_speed.innerHTML = '--' ;
			return;
		}
		
		console.log(response)
		humidity.innerHTML = response.humidity
		temp.innerHTML = response.temp
		sunset.innerHTML = response.sunset
		cloud_pct.innerHTML = response.cloud_pct
		sunset.innerHTML = response.sunset
        feels_like.innerHTML = response.feels_like
		wind_speed.innerHTML = response.wind_speed
		
	} )
	.catch(err => console.error(err));
}
submit.addEventListener( "click" , (e) => {
    e.preventDefault()
	getWeather( box.value ) ;
})

box.addEventListener( "keyup" , (e) => {
	if( e.keyCode == 13  ){
	getWeather( box.value ) ;
	}
})

