import "../blocks/modalWithForm.css";

export default function ModalWithForm({
  children,
  activeModal,
  closeActiveModal,
  buttonText,
  title,
  name,
}) {
  return (
    <div className="modal modal_is-opened">
      <div className={`modal__type modal_type_${name}`}>
        <form className={`modal__form modal__form_${name}`} noValidate>
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
