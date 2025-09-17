import "../blocks/weatherCard.css";
import { getImage } from "../utils/functions.js";

export default function WeatherCard({ weatherData }) {
  console.log(weatherData);
  return (
    <>
      <div className="weather">
        <img
          className="weather__card"
          src={getImage(weatherData.imgWeather)}
          alt={`Current Weather: ${weatherData.description}`}
        />
        <p className="weather__temp">{weatherData.weatherTemp}&deg; F</p>
      </div>
    </>
  );
}
