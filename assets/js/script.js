var cityInput = document.getElementById("city-input");
var cityName = document.getElementById("city");
var searchEl = document.getElementById("search-button");
var currentPic = document.getElementById("current-pic");
var tempEl = document.getElementById("temperature");
var humidEl = document.getElementById("humidity");
var windEl = document.getElementById("wind-speed");
var uvEl = document.getElementById("UV-index");
var apiKey = "23a2969256bbc0a60e21d67c4fcf10ab"



 function weather(cityName) {
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

 }

 var saveSearch = function() {
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
}