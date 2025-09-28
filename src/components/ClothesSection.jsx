import "../blocks/clothesSection.css";
import ItemCard from "./ItemCard";

export default function ClothesSection({
  clothingItems,
  onCardClick,
  onAddClick,
}) {
  return (
    <div className="clothesSection">
      <div className="clothesSection__header">
        <span className="clothesSection__header_title">Your items</span>
        <button
          type="button"
          className="clothesSection__header_add-btn"
          onClick={onAddClick}
        >
          + Add new
        </button>
      </div>
      <ul className="clothesSection__cards">
        {clothingItems.map((item) => {
          return (
            <ItemCard onCardClick={onCardClick} key={item._id} item={item} />
          );
        })}
      </ul>
    </div>
  );
}
