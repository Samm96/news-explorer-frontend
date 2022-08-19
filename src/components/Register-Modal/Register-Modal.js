import ModalWithForm from "../ModalWithForm/ModalWithForm";

const Register = ({ isOpen, openModal, onClose }) => {
  return (
    <ModalWithForm
      isOpen={isOpen}
      modalTitle="Sign up"
      buttonText="Sign up"
      linkText="Sign in"
      openModal={openModal}
      formName="register"
      onClose={onClose}
    >
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
    </ModalWithForm>
  );
};

export default Register;
