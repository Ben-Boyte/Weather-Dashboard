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
        axios.get(queryURL)
            .then(function (response) {

                weatherToday.classList.remove("d-none");

                var currentDate = new Date(response.data.dt * 1000);
                var day = currentDate.getDate();
                var month = currentDate.getMonth() + 1;
                var year = currentDate.getFullYear();
                
                let weatherPic = response.data.weather[0].icon;

                cityName.innerHTML = response.data.name + " (" + month + "/" + day + "/" + year + ") ";
                currentPic.setAttribute("src", "https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
                currentPic.setAttribute("alt", response.data.weather[0].description);
                currentTemp.innerHTML = "Temperature: " + math(response.data.main.temp) + " &#176F";
                currentHumidity.innerHTML = "Humidity: " + response.data.main.humidity + "%";
                currentWind.innerHTML = "Wind Speed: " + response.data.wind.speed + " MPH";
                
                let lat = response.data.coord.lat;
                let lon = response.data.coord.lon;
                let UVQueryURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey + "&cnt=1";
                axios.get(UVQueryURL)
                    .then(function (response) {
                        let UVNumber = document.createElement("span");
                        
                        if (response.data[0].value < 8 ) {
                            UVNumber.setAttribute("class", "badge badge-warning");
                        }
                        else if (response.data[0].value < 4) {
                            UVNumber.setAttribute("class", "badge badge-success");
                        }
                        else {
                            UVNumber.setAttribute("class", "badge badge-danger");
                        }
                        UVNumber.innerHTML = response.data[0].value;
                        currentUV.innerHTML = "UV Index: ";
                        currentUV.append(UVNumber);
                    });
                
            
                
        });
    }


        
weather();