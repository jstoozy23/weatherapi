var APIKey = "12354cc5bd203f7a482ac8b6140be401";
var cityEntry = document.getElementById("cityEntry")
var city;

var button = document.getElementById("button");
var weatherSection1 = document.getElementById("weatherForcast1");
var weatherSection2 = document.getElementById("weatherForcast2");
var weatherSection3 = document.getElementById("weatherForcast3");
var weatherSection4 = document.getElementById("weatherForcast4");
var weatherSection5 = document.getElementById("weatherForcast5");

function weather(){
    var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    fetch(weatherUrl)
        .then(response => response.json())
        .then(response => {

//pull variable for Lat and Long and use in fetch to different URL with future weather
        var lat = response.coord.lat;
        var lon = response.coord.lon;
        
        var fiveDayUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&appid=" + APIKey;

        fetch(fiveDayUrl)
            .then(response => response.json())
            .then(response => {
            console.log("city 5 day weather", response)
        
        var weatherArray = response.daily;
       
        // weatherParse(weatherArray);

     
        // var datePick = weatherParse(response[0].date);
        var weatherIcon = (weatherArray[0].weather[0].icon);
        console.log(weatherIcon);

        var dayTemp = (weatherArray[0].temp.day);
        console.log(dayTemp);

        var dayWind = (weatherArray[0].wind_speed);
        console.log(dayWind);

        var dayHumidity = (weatherArray[0].humidity);
        console.log(dayHumidity);

        // function weatherParse(weatherArray){
        //     console.log(weatherArray);
                for (let i = 0; i < 1; i++) {
                    var div = document.createElement("div");
                    var p1 = document.createElement("p");
                    p1.textContent = (weatherIcon);
                    var p2 = document.createElement("p");
                    p2.textContent = (dayTemp);
                    var p3 = document.createElement("p");
                    p2.textContent = (dayWind);
                    var p4 = document.createElement("p");
                    p4.textContent = (dayHumidity);

                    weatherSection1.appendChild(div);
                    div.appendChild(p1);
                    p1.appendChild(p2);
                    p2.appendChild(p3);
                    p3.appendChild(p4);
                
            }; 

            for (let i = 1; i < 2; i++) {
                var div = document.createElement("div");
                var p1 = document.createElement("p");
                p1.textContent = (weatherIcon);
                var p2 = document.createElement("p");
                p2.textContent = (dayTemp);
                var p3 = document.createElement("p");
                p2.textContent = (dayWind);
                var p4 = document.createElement("p");
                p4.textContent = (dayHumidity);

                weatherSection2.appendChild(div);
                div.appendChild(p1);
                p1.appendChild(p2);
                p2.appendChild(p3);
                p3.appendChild(p4);
            
        };
        
        for (let i = 2; i < 3; i++) {
            var div = document.createElement("div");
            var p1 = document.createElement("p");
            p1.textContent = (weatherIcon);
            var p2 = document.createElement("p");
            p2.textContent = (dayTemp);
            var p3 = document.createElement("p");
            p2.textContent = (dayWind);
            var p4 = document.createElement("p");
            p4.textContent = (dayHumidity);

            weatherSection3.appendChild(div);
            div.appendChild(p1);
            p1.appendChild(p2);
            p2.appendChild(p3);
            p3.appendChild(p4);
        };

        for (let i = 3; i < 4; i++) {
            var div = document.createElement("div");
            var p1 = document.createElement("p");
            p1.textContent = (weatherIcon);
            var p2 = document.createElement("p");
            p2.textContent = (dayTemp);
            var p3 = document.createElement("p");
            p2.textContent = (dayWind);
            var p4 = document.createElement("p");
            p4.textContent = (dayHumidity);

            weatherSection4.appendChild(div);
            div.appendChild(p1);
            p1.appendChild(p2);
            p2.appendChild(p3);
            p3.appendChild(p4);
        };

        for (let i = 4; i < 5; i++) {
            var div = document.createElement("div");
            var p1 = document.createElement("p");
            p1.textContent = (weatherIcon);
            var p2 = document.createElement("p");
            p2.textContent = (dayTemp);
            var p3 = document.createElement("p");
            p2.textContent = (dayWind);
            var p4 = document.createElement("p");
            p4.textContent = (dayHumidity);

            weatherSection4.appendChild(div);
            div.appendChild(p1);
            p1.appendChild(p2);
            p2.appendChild(p3);
            p3.appendChild(p4);
        };


})})}  

//localStorage.setItem('cities', JSON.stringify(city));

button.addEventListener("click" , function() {
    city = cityEntry.value;
    localStorage.setItem('cityName' , JSON.stringify(city));
    weather();
});