import { useEffect, useState } from "react";
import useForm from "../hooks/useForm.js";
import "../blocks/modalWithForm.css";

export default function ModalWithForm({
  children,
  closeActiveModal,
  buttonText,
  title,
  name,
  handleFormSubmit,
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
        className={`modal__type modal_type_${name}`}
        onClick={handleModalContentClick}
      >
        <form
          className={`modal__form modal__form_${name}`}
          name={name}
          noValidate
          onSubmit={handleFormSubmit}
        >
          <button
            onClick={closeActiveModal}
            className="modal__close-btn"
            type="button"
            aria-label="Close Button"
          ></button>
          <h2 className="modal__title">{title}</h2>
          {children}
          <button
            type="submit"
            className="modal__submit-btn modal__submit-btn_disabled"
            aria-label="Save Button"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
