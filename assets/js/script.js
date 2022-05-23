    var enterCity = document.getElementById("enter-city");
    var cityName = document.getElementById("city");
    var search = document.getElementById("search-button");
    var currentPic = document.getElementById("current-pic");
    var weatherToday = document.getElementById("weather-today");
    var fivedayForecast = document.getElementById("fiveday-forecast");
    var currentTemp = document.getElementById("temperature");
    var currentHumidity = document.getElementById("humidity");
    var currentWind = document.getElementById("wind-speed");
    var currentUV = document.getElementById("UV-index");
    var historyEl = document.getElementById("history");
    var apiKey = "23a2969256bbc0a60e21d67c4fcf10ab"

    search.addEventListener("click", function () {
        var searchResult = enterCity.value;
        weather(searchResult);
        searchHistory.push(searchResult);
        localStorage.setItem("search", JSON.stringify(searchHistory));
        saveSearch();
    })

function math(K) {
    return Math.floor((K - 273.15) * 1.8 + 32);
}

let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

function saveSearch() {
    historyEl.innerHTML = "";
    for (let i = 0; i < searchHistory.length; i++) {
        var historyResult = document.createElement("input");
        historyResult.setAttribute("type", "text");
        historyResult.setAttribute("readonly", true);
        historyResult.setAttribute("class", "form-control d-block bg-white");
        historyResult.setAttribute("value", searchHistory[i]);
        historyResult.addEventListener("click", function () {
            weather(historyResult.value);
        })
        historyEl.append(historyResult);
    }
}

saveSearch();
if (searchHistory.length > 0) {
    weather(searchHistory[searchHistory.length - 1]);
}


    function weather(cityName) {
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
       
    }


        
weather();