function searchNewCity(event) {
  event.preventDefault();
  let searchSubmit = document.querySelector("#city-search");
  let cityElement = document.querySelector("#weather-app-city");
  cityElement.innerHTML = searchSubmit.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", searchNewCity);
