import { useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext.jsx";
import "../blocks/main.css";
import ItemCard from "./ItemCard.jsx";
import WeatherCard from "./WeatherCard.jsx";

export default function Main({ weatherData, onCardClick, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="itemCards">
        <p className="itemCards__header">
          Today is{" "}
          {currentTemperatureUnit === "F"
            ? weatherData.weatherTemp[0]
            : weatherData.weatherTemp[1]}
          &deg; {currentTemperatureUnit} / You may want to wear:
        </p>
        <ul className="itemCards__list">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.weatherType;
            })
            .map((item) => {
              return (
                <ItemCard
                  onCardClick={onCardClick}
                  key={item._id}
                  item={item}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}
