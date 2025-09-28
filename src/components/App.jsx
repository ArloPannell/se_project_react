import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../blocks/app.css";
import "../vendor/fonts.css";
import "../vendor/normalize.css";
import {
  useAPI,
  parseWeatherData,
  formatWeatherData,
  getUniqueId,
} from "../utils/functions.js";
import { getItems, postItem, deleteItem } from "../utils/api.js";
import {
  defaultClothingItems as itemDefaults,
  weatherDefaults,
} from "../utils/constants.js";
import TempTypeContext from "../contexts/CurrentTemperatureUnitContext.jsx";
import Header from "./Header";
import Main from "./Main";
import Profile from "./Profile";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import AddItemModal from "./AddItemModal.jsx";
import ItemModal from "./ItemModal";
import DeleteItemWarning from "./DeleteItemWarning";

function App() {
  const [clothingItems, setClothingItems] = useState(itemDefaults);
  const [weatherData, setWeatherData] = useState(weatherDefaults);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((res) =>
        console.error("Failed to fetch clothing items: ", res.error)
      );
  }, []);

  useEffect(() => {
    useAPI()
      .then((data) => {
        const initData = parseWeatherData(data);
        const finalData = formatWeatherData(initData);
        setWeatherData(finalData);
      })
      .catch((res) => {
        console.error("Failed to fetch weather data: ", res.error);
      });
  }, []);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddGarmet = () => {
    setActiveModal("add");
  };

  const handleDeleteWarning = () => {
    setActiveModal("delete-warning");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const addGarmet = (formData) => {
    const newID = getUniqueId();
    const garmetData = { _id: getUniqueId(), ...formData };
    setClothingItems([garmetData, ...clothingItems]);
    postItem(garmetData);
    closeActiveModal();
  };

  const deleteGarmet = () => {
    setClothingItems(
      clothingItems.filter((item) => {
        return item._id != selectedCard._id;
      })
    );
    deleteItem(selectedCard._id);
    closeActiveModal();
  };

  return (
    <TempTypeContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header handleAddGarmet={handleAddGarmet} weatherData={weatherData} />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  clothingItems={clothingItems}
                  onCardClick={handleCardClick}
                  onAddClick={handleAddGarmet}
                />
              }
            />
          </Routes>
          <Footer />
        </div>

        {activeModal === "add" && (
          <AddItemModal
            closeActiveModal={closeActiveModal}
            onAddGarmet={addGarmet}
          />
        )}

        {activeModal === "preview" && (
          <ItemModal
            card={selectedCard}
            closeActiveModal={closeActiveModal}
            onDeleteClick={handleDeleteWarning}
            name="previewGarmet"
          />
        )}

        {activeModal === "delete-warning" && (
          <DeleteItemWarning
            card={selectedCard}
            closeActiveModal={closeActiveModal}
            onYesDelete={deleteGarmet}
            name="deleteWarning"
          />
        )}
      </div>
    </TempTypeContext.Provider>
  );
}

export default App;
