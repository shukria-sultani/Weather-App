const form = document.querySelector("#form");
const currentCity = document.querySelector(".city");
const newCity = document.querySelector("#cityName");
const date = document.querySelector(".date");
const currentTemp = document.getElementById("currentTemp");

// Date
const currentDate = new Date();
let day = currentDate.getDay();
let hour = currentDate.getHours();
let minute = currentDate.getMinutes();
let days = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
date.textContent = `${days[day]} ${hour}:${minute}, moderate rain`;

const getNameOnPage = (e) => {
  e.preventDefault();
  currentCity.textContent = newCity.value;
  const apiURL = `https://api.shecodes.io/weather/v1/current?query=${newCity.value}&key=d0ae0fao33784f3fd944ad43bb56t397&units=metric`;

  axios.get(apiURL).then(showTemperature);
};

const showTemperature = (response) => {
  currentTemp.textContent = Math.round(response.data.temperature.current);
};

form.addEventListener("submit", getNameOnPage);
