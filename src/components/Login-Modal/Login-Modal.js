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
    />
  );
};

export default Login;
