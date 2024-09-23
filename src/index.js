function updateWeather(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#weather-app-city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let speedElement = document.querySelector("#speed");
  let timeElement = document.querySelector("#time");
  let emojiElement = document.querySelector("#weather-emoji");
  let date = new Date(response.data.time * 1000);

  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  emojiElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-app-emoji">`;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%,`;
  speedElement.innerHTML = `${response.data.wind.speed}km/h`;
  timeElement.innerHTML = formatDate(date);
  temperatureElement.innerHTML = temperature;
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes},`;
}

function getCityData(city) {
  let apiKey = "73a6cfa2ca03d0o649bc324246t2d60c";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  console.log(apiUrl);

  axios.get(apiUrl).then(updateWeather);
}

function search(event) {
  event.preventDefault();
  let searchSubmit = document.querySelector("#city-search");

  getCityData(searchSubmit.value);
}

function displayForecast() {
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";

  days.forEach(function (day) {
    forecastHtml += `
    <div class="weather-forecast-day">
          <div class="weather-forecast-date">${day}</div>
          <div class="weather-forecast-icon">☀️</div>
          <div class="weather-forecast-temperatures">
            <div class="weather-forecast-temperature">
              <strong>15°</strong>
            </div>
            <div class="weather-forecast-temperature">9°</div>
          </div>
        </div>
        `;
  });
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

getCityData("London");
displayForecast();
