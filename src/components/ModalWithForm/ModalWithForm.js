import "./ModalWithForm.css";
import Modal from "../Modal/Modal";

const ModalWithForm = ({ isOpen, modalTitle, buttonText }) => {
  return (
    <Modal
      isOpen={isOpen}
      modalTitle={modalTitle}
      isButton={true}
      buttonText={buttonText}
    >
        
    </Modal>
  );
};

export default ModalWithForm;
