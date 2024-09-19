function updateWeather(response) {
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
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

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

getCityData("London");
