import "./ModalWithForm.css";
import Modal from "../Modal/Modal";

const ModalWithForm = ({
  isOpen,
  modalTitle,
  buttonText,
  linkText,
  openModal,
  formName,
  onClose,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      modalTitle={modalTitle}
      buttonText={buttonText}
      linkText={linkText}
      openModal={openModal}
      onClose={onClose}
    >
      <form name={formName}>
        <div className="modal-form__input-container">
          <label className="modal-form__input-label" aria-label="email">
            Email
          </label>
          <input
            className="modal-form__input"
            type="email"
            placeholder="Enter email"
          />
        </div>

        <div className="modal-form__input-container">
          <label className="modal-form__input-label" aria-label="password">
            Password
          </label>
          <input
            className="modal-form__input"
            type="password"
            placeholder="Enter password"
          />
        </div>

        {formName === "register" ? (
          <div className="modal-form__input-container modal-form__input-container_type_username">
            <label className="modal-form__input-label" aria-label="username">
              Username
            </label>
            <input
              className="modal-form__input"
              type="text"
              placeholder="Enter your username"
            />
          </div>
        ) : (
          ""
        )}
      </form>
      <button className="modal-form__button">{buttonText}</button>
      <p className={`modal-form__text`}>
        or{" "}
        <button className="modal-form__link" onClick={openModal}>
          {linkText}
        </button>
      </p>
    </Modal>
  );
};

export default ModalWithForm;
