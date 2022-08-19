import ModalWithForm from "../ModalWithForm/ModalWithForm";

const Login = ({ isOpen, openModal, onClose }) => {
  return (
    <ModalWithForm
      isOpen={isOpen}
      modalTitle="Sign in"
      buttonText="Sign in"
      linkText="Sign up"
      openModal={openModal}
      formName="login"
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
    </ModalWithForm>
  );
};

export default Login;
