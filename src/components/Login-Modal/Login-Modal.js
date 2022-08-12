import ModalWithForm from "../ModalWithForm/ModalWithForm";

const Login = ({ isOpen, openModal }) => {
  return (
    <ModalWithForm
      isOpen={isOpen}
      modalTitle="Sign in"
      buttonText="Sign in"
      linkText="Sign up"
      openModal={openModal}
      formName="login"
    />
  );
};

export default Login;
