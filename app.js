var button = document.querySelector(".button");
var Inputvalue = document.querySelector(".Inputvalue");
var cityName = document.querySelector(".CityName");
var weatherType = document.querySelector(".WeatherType");
var Temp = document.querySelector(".Temp");
var api = config.api_key;

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+Inputvalue.value+'&appid='+ api)
    .then(response => response.json())
    .then(data => {
        var cityname = data['name'];
        var temperature = data['main']['temp'];
        var descrp = data['weather'][0]['description'];

        cityName.innerHTML = cityname;
        weatherType.innerHTML = descrp;
        Temp.innerHTML = temperature-273.15 + "°C";
    })


 .catch(err => alert("Make Sure you spell it correctly!"))
})
