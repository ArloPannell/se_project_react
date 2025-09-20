import "../blocks/main.css";
import ItemCard from "./ItemCard.jsx";
import WeatherCard from "./WeatherCard.jsx";

export default function Main({ weatherData, onCardClick, clothingItems }) {
  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="itemCards">
        <p className="itemCards__header">
          Today is {weatherData.weatherTemp} &deg; F / You may want to wear:
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
