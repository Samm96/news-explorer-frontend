import ModalWithForm from "../ModalWithForm/ModalWithForm";

const Register = ({ isOpen, openModal }) => {
  return (
    <ModalWithForm
      isOpen={isOpen}
      modalTitle="Sign up"
      buttonText="Sign up"
      linkText="Sign in"
      openModal={openModal}
      formName="register"
    />
  );
};

export default Register;
