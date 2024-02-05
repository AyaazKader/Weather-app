const apiKey = "385f23745b09e3d2a31a52431d0206b3";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
  document.querySelector(".name").innerHTML = data.name;
}

searchButton.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

let input = document.querySelector("input");

input.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    checkWeather(searchBox.value);
  }
});
