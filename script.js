const form = document.querySelector("#form");
const currentCity = document.querySelector(".city");
const newCity = document.querySelector("#cityName");
const date = document.querySelector(".date");
const currentTemp = document.getElementById("currentTemp");
const HumidWind = document.getElementById('HumidWind')
const weatherIcon = document.querySelector('.weather-icon')
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
  date.textContent = `${days[day]} ${hour}:${minute}, ${response.data.condition.description}`;
  HumidWind.innerHTML = `
       Humidity: <strong>${response.data.temperature.humidity}%</strong>, Wind: <strong>${Math.round(response.data.wind.speed)}km/h</strong>
  `
  weatherIcon.innerHTML = `    
  <img src=${response.data.condition.icon_url} alt=${response.data.condition.icon}>  
  `

  console.log(response)
};

form.addEventListener("submit", getNameOnPage);
