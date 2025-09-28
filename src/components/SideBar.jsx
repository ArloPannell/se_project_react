import { getImage } from "../utils/functions.js";
import "../blocks/sideBar.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__avatar"
        src={getImage("headerAvatar")}
        alt="User Avatar"
      />
      <div className="sidebar__user-name">UserName</div>
    </div>
  );
}
