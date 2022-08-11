import "./ModalWithForm.css";
import Modal from "../Modal/Modal";

const ModalWithForm = ({
  isOpen,
  modalTitle,
  buttonText,
  linkText,
  openModal,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      modalTitle={modalTitle}
      isButton={true}
      buttonText={buttonText}
      linkText={linkText}
      openModal={openModal}
    ></Modal>
  );
};

export default ModalWithForm;
