import { useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext.jsx";
import "../blocks/weatherCard.css";
import { getImage } from "../utils/functions.js";

export default function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  return (
    <div className="weather">
      <img
        className="weather__card"
        src={getImage(weatherData.imgWeather)}
        alt={`Current Weather: ${weatherData.description}`}
      />
      <p className="weather__temp">
        {currentTemperatureUnit === "F"
          ? weatherData.weatherTemp[0]
          : weatherData.weatherTemp[1]}
        &deg; {currentTemperatureUnit}
      </p>
    </div>
  );
}
