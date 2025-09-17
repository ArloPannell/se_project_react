export default function NewGarmetForm() {
  return (
    <>
      <label htmlFor="name-input" className="modal__label">
        Name
      </label>
      <input
        type="text"
        className="modal__input"
        id="name-input"
        placeholder="Name"
      />

      <label htmlFor="imageURL" className="modal__label">
        Image
      </label>
      <input
        type="url"
        className="modal__input"
        id="imageURL"
        placeholder="Image URL"
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
          />
          <label
            htmlFor="cold"
            className="modal__label modal__label_type-fieldset"
          >
            Cold
          </label>
        </div>
      </fieldset>
    </>
  );
}
