import { useEffect, useState } from "react";
import "../blocks/app.css";
import "../vendor/fonts.css";
import "../vendor/normalize.css";
import {
  useAPI,
  parseWeatherData,
  formatWeatherData,
} from "../utils/functions.js";
import {
  defaultClothingItems as itemDefaults,
  weatherDefaults,
} from "../utils/constants.js";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import NewGarmetForm from "./NewGarmetForm";
import ItemModal from "./ItemModal";

function App() {
  const [defaultItems, setDefaultItems] = useState(itemDefaults);
  const [weatherData, setWeatherData] = useState(weatherDefaults);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  useEffect(() => {
    useAPI()
      .then((data) => {
        const initData = parseWeatherData(data);
        const finalData = formatWeatherData(initData);
        setWeatherData(finalData);
      })
      .catch(console.error);
  }, []);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddGarmet = () => {
    setActiveModal("add");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header handleAddGarmet={handleAddGarmet} weatherData={weatherData} />
          <Main
            weatherData={weatherData}
            onCardClick={handleCardClick}
            defaultItems={defaultItems}
          />
          <Footer />
        </div>

        {activeModal === "add" && (
          <ModalWithForm
            activeModal={activeModal}
            closeActiveModal={closeActiveModal}
            buttonText="Add garmet"
            title="New garmet"
            name="newGarmet"
          >
            <NewGarmetForm />
          </ModalWithForm>
        )}

        {activeModal === "preview" && (
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            closeActiveModal={closeActiveModal}
            name="previewGarmet"
          />
        )}
      </div>
    </>
  );
}

export default App;
