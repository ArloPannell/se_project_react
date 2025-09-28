import useForm from "../hooks/useForm.js";
import ModalWithForm from "./ModalWithForm";

export default function AddItemModal({ closeActiveModal, onAddGarmet }) {
  const defaultValues = { name: "", link: "", weather: "" };
  const { values, handleChange, handleReset } = useForm(defaultValues);

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    onAddGarmet(values);
    handleReset(defaultValues);
  };

  return (
    <ModalWithForm
      closeActiveModal={closeActiveModal}
      buttonText="Add garmet"
      title="New garmet"
      name="newGarmet"
      handleFormSubmit={handleFormSubmit}
    >
      <label htmlFor="name-input" className="modal__label">
        Name
      </label>
      <input
        type="text"
        className="modal__input"
        id="name-input"
        name="name"
        placeholder="Name"
        value={values.name}
        onChange={handleChange}
      />

      <label htmlFor="imageURL" className="modal__label">
        Image
      </label>
      <input
        type="url"
        className="modal__input"
        name="link"
        id="imageURL"
        placeholder="Image URL"
        value={values.link}
        onChange={handleChange}
      />

      <fieldset className="modal__fieldset modal__fieldset_type-radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <div className="modal__fieldset-wrapper">
          <input
            type="radio"
            className="modal__radio-input"
            value="hot"
            id="hot"
            name="weather"
            checked={values.weather === "hot"}
            onChange={handleChange}
          />
          <label
            htmlFor="hot"
            className="modal__label modal__label_type-fieldset"
          >
            Hot
          </label>
        </div>
        <div className="modal__fieldset-wrapper">
          <input
            type="radio"
            className="modal__radio-input"
            value="warm"
            id="warm"
            name="weather"
            checked={values.weather === "warm"}
            onChange={handleChange}
          />
          <label
            htmlFor="warm"
            className="modal__label modal__label_type-fieldset"
          >
            Warm
          </label>
        </div>
        <div className="modal__fieldset-wrapper">
          <input
            type="radio"
            className="modal__radio-input"
            value="cold"
            id="cold"
            name="weather"
            checked={values.weather === "cold"}
            onChange={handleChange}
          />
          <label
            htmlFor="cold"
            className="modal__label modal__label_type-fieldset"
          >
            Cold
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
}
