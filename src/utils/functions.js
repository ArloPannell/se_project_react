import { wtwImages, weatherIDMap } from "./constants.js";
import { weatherAPI } from "./weather.js";
import { v4 as idValue } from "https://jspm.dev/uuid";

function getUniqueId() {
  return idValue();
}

function getDate() {
  const dateString = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return dateString;
}

function getImage(imgName) {
  return wtwImages.find((item) => {
    return item.name == imgName;
  }).image;
}

function checkAPI(res) {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
}

function useAPI() {
  const fetchURL = `https://api.openweathermap.org/data/2.5/weather?lat=${weatherAPI.latitude}&lon=${weatherAPI.longitude}&units=imperial&appid=${weatherAPI.apiKey}`;
  return fetch(fetchURL).then(checkAPI);
}

function parseWeatherData(weatherData) {
  const parsedWeatherData = {};
  parsedWeatherData.temp = weatherData.main.temp;
  parsedWeatherData.location = weatherData.name;
  parsedWeatherData.weatherIDnumber = weatherData.weather[0].id;
  parsedWeatherData.weatherText = weatherData.weather[0].main;
  parsedWeatherData.weatherDescription = weatherData.weather[0].description;
  parsedWeatherData.currentTimestamp = weatherData.dt;
  parsedWeatherData.sunriseTime = weatherData.sys.sunrise;
  parsedWeatherData.sunsetTime = weatherData.sys.sunset;

  return parsedWeatherData;
}

function setHeaderWeather(parsedWeatherData) {
  const setDayNight =
    parsedWeatherData.currentTimestamp >= parsedWeatherData.sunriseTime &&
    parsedWeatherData.currentTimestamp <= parsedWeatherData.sunsetTime
      ? "day"
      : "night";
  const setWeatherType = weatherIDMap.find((item) => {
    return item.id === parsedWeatherData.weatherIDnumber;
  }).type;
  return `${setDayNight}${setWeatherType}`;
}

function setWeatherType(temp) {
  if (temp >= 70) {
    return "hot";
  } else if (temp >= 60) {
    return "warm";
  } else {
    return "cold";
  }
}

function formatWeatherData(initData) {
  const formattedData = {};
  formattedData.imgWeather = setHeaderWeather(initData);
  formattedData.weatherType = setWeatherType(initData.temp);
  formattedData.weatherTemp = [
    Math.round(initData.temp),
    Math.round(((initData.temp - 32) * 5) / 9),
  ];
  formattedData.location = initData.location;
  formattedData.description = initData.weatherDescription;

  return formattedData;
}

export {
  getDate,
  getImage,
  formatWeatherData,
  useAPI,
  parseWeatherData,
  getUniqueId,
};
