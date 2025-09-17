import "../blocks/header.css";
import { getDate, getImage } from "../utils/functions.js";

export default function Header({ handleAddGarmet, weatherData }) {
  return (
    <>
      <header className="header">
        <img
          className="header__logo"
          alt="Header Logo"
          src={getImage("headerLogo")}
        />
        <p className="header__date-location">
          {getDate()}, {weatherData.location}
        </p>
        <button
          onClick={handleAddGarmet}
          className="header__btn-AddGarmet"
          type="button"
        >
          + Add Clothes
        </button>
        <div className="header__container">
          <p className="header__username">UserName</p>
          <img
            className="header__avatar"
            src={getImage("headerAvatar")}
            alt="User Avatar"
          />
        </div>
      </header>
    </>
  );
}
