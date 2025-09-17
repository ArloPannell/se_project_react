import "../blocks/itemCard.css";

export default function ItemCard({ item, onCardClick }) {
  const showCard = () => {
    onCardClick(item);
  };

  return (
    <>
      <li key={item.id} className="itemCard">
        <h1 className="itemCard__name">{item.name}</h1>
        <img
          onClick={showCard}
          className="itemCard__image"
          src={item.link}
          alt={item.name}
        />
      </li>
    </>
  );
}
