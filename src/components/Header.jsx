import { Link } from "react-router-dom";
import TempTypeToggle from "./TempTypeToggle";
import "../blocks/header.css";
import { getDate, getImage } from "../utils/functions.js";

export default function Header({ handleAddGarmet, weatherData }) {
  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo"
          alt="Header Logo"
          src={getImage("headerLogo")}
        />
      </Link>
      <p className="header__date-location">
        {getDate()}, {weatherData.location}
      </p>
      <TempTypeToggle />
      <button
        onClick={handleAddGarmet}
        className="header__btn-AddGarmet"
        type="button"
      >
        + Add Clothes
      </button>
      <Link to="/profile" className="header__link">
        <div className="header__container">
          <p className="header__username">UserName</p>
          <img
            className="header__avatar"
            src={getImage("headerAvatar")}
            alt="User Avatar"
          />
        </div>
      </Link>
    </header>
  );
}
