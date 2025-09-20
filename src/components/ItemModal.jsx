import { useEffect, useState } from "react";
import "../blocks/itemModal.css";

export default function ItemModal({ card, closeActiveModal, name }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeActiveModal();
      }
    };
    // Add event listener when the component mounts
    document.addEventListener("keydown", handleEscape);
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleModalContentClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className="modal" onClick={closeActiveModal}>
      <div
        className={`modal__type modal_type_${name}`}
        onClick={handleModalContentClick}
      >
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
