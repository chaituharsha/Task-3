console.log("weather api call through longitutde and latitude");
let lat = 42.73320;
let long = 50.86958;
var request = new XMLHttpRequest();

request.open(
  "GET",
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=9df134bdc0f2dcc1e0b6bf7d0ae792c1`,
  true
);

request.onload = function () {
  let data = JSON.parse(this.response);
  console.log("Place: " + data.name);
  console.log(
    "Humidity: " + data.main.humidity,
    "Temperature: " + data.main.temp,
    "Min Temp: " + data.main.temp_max,
    "Max Temp: " + data.main.temp_min
  );
};

request.send();