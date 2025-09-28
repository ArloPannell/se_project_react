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

  const handleAddGarment = () => {
    setActiveModal("add");
  };

  const handleDeleteWarning = () => {
    setActiveModal("delete-warning");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const addGarment = (formData) => {
    const newID = getUniqueId();
    const garmentData = { _id: getUniqueId(), ...formData };
    postItem(garmentData)
      .then((garmentData) => {
        setClothingItems([garmentData, ...clothingItems]);
        closeActiveModal();
      })
      .catch((res) => {
        console.error(console.error("Failed to post new garment: ", res.error));
      });
  };

  const deleteGarment = () => {
    deleteItem(selectedCard._id)
      .then(
        setClothingItems(
          clothingItems.filter((item) => {
            return item._id != selectedCard._id;
          })
        ),
        closeActiveModal()
      )
      .catch((res) => {
        console.error(console.error("Failed to delete garment: ", res.error));
      });
  };

  return (
    <TempTypeContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header
            handleAddGarment={handleAddGarment}
            weatherData={weatherData}
          />

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
                  onAddClick={handleAddGarment}
                />
              }
            />
          </Routes>
          <Footer />
        </div>

        {activeModal === "add" && (
          <AddItemModal
            closeActiveModal={closeActiveModal}
            onAddGarment={addGarment}
          />
        )}

        {activeModal === "preview" && (
          <ItemModal
            card={selectedCard}
            closeActiveModal={closeActiveModal}
            onDeleteClick={handleDeleteWarning}
            name="previewGarment"
          />
        )}

        {activeModal === "delete-warning" && (
          <DeleteItemWarning
            card={selectedCard}
            closeActiveModal={closeActiveModal}
            onYesDelete={deleteGarment}
            name="deleteWarning"
          />
        )}
      </div>
    </TempTypeContext.Provider>
  );
}

export default App;
