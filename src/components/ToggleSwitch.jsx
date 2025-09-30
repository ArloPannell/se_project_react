import { useContext } from "react";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import "../blocks/temptypetoggle.css";

export default function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext
  );
  return (
    <div className="toggle">
      <label className="toggle__switch">
        <input
          type="checkbox"
          className="toggle__checkbox"
          checked={currentTemperatureUnit === "C"}
          onChange={handleToggleSwitchChange}
        />
        <span className="toggle__circle"></span>
        <span className={`toggle__left toggle__left-${currentTemperatureUnit}`}>
          F
        </span>
        <span
          className={`toggle__right toggle__right-${currentTemperatureUnit}`}
        >
          C
        </span>
      </label>
    </div>
  );
}
