import "../blocks/itemModal.css";

export default function ItemModal({ card, closeActiveModal, name }) {
  return (
    <div className="modal">
      <div className={`modal__type modal_type_${name}`}>
        <button
          onClick={closeActiveModal}
          className="modal__close-btn modal__close-btn_type-preview-1"
          type="button"
          aria-label="Close Button"
        ></button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__preview-footer">
          <h2 className="modal__preview-caption">{card.name}</h2>
          <p className="modal__preview-weather">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}
