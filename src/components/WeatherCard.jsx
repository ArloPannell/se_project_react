import "../blocks/weatherCard.css";
import { getImage } from "../utils/functions.js";

export default function WeatherCard({ weatherData }) {
  return (
    <>
      <div className="weather">
        <img className="weather__card" src={getImage(weatherData.imgWeather)} />
        <p className="weather__temp">{weatherData.weatherTemp}&deg; F</p>
      </div>
    </>
  );
}
