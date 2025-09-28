import SideBar from "./SideBar";
import ClothesSection from "./ClothesSection";
import "../blocks/profile.css";

export default function Profile({ clothingItems, onCardClick, onAddClick }) {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        clothingItems={clothingItems}
        onCardClick={onCardClick}
        onAddClick={onAddClick}
      />
    </div>
  );
}
