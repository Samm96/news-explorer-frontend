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
  onSubmit,
  children,
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
      <form name={formName} onSubmit={onSubmit}>
        {children}
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
