var cityInput = document.getElementById("city-input");
var cityName = document.getElementById("city");
var searchEl = document.getElementById("search-button");
var currentPic = document.getElementById("current-pic");
var weatherToday = document.getElementById("weather-today")
var tempEl = document.getElementById("temperature");
var humidEl = document.getElementById("humidity");
var windEl = document.getElementById("wind-speed");
var uvEl = document.getElementById("UV-index");
var historyEl = document.getElementById("history");
var apiKey = "23a2969256bbc0a60e21d67c4fcf10ab"



 function weather(cityName) {
    let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
    axios.get(queryURL)
    .then(function (response) {
    })

 }

 function saveSearch() {
    
   let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

   historyEl.innerHTML = "";

   for (let i = 0; i < searchHistory.length; i++) {
       const historyItem = document.createElement("input");
       historyItem.setAttribute("type", "text");
       historyItem.setAttribute("readonly", true);
       historyItem.setAttribute("class", "form-control d-block bg-white");
       historyItem.setAttribute("value", searchHistory[i]);
       historyItem.addEventListener("click", function () {
           weather(historyItem.value);
       })
       historyEl.append(historyItem);
   }
}