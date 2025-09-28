import { useEffect, useState } from "react";
import "../blocks/deleteItemWarning.css";

export default function DeleteItemWarning({
  card,
  closeActiveModal,
  onYesDelete,
  name,
}) {
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
        className={`modal__type modal__type_${name}`}
        onClick={handleModalContentClick}
      >
        <button
          onClick={closeActiveModal}
          className="modal__close-btn modal__close-btn_type-deleteWarning"
          type="button"
          aria-label="Close Button"
        ></button>
        <span className="modal__warning-text">
          Are you sure you want to delete this item?
        </span>
        <span className="modal__warning-text">
          This action is irreversible.
        </span>
        <button
          type="button"
          className="modal__deleteItem-btn"
          onClick={onYesDelete}
        >
          Yes, delete Item
        </button>
        <button
          type="button"
          className="modal__cancel-btn"
          onClick={closeActiveModal}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
