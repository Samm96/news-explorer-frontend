import "./ModalWithForm.css";
import Modal from "../Modal/Modal";

const ModalWithForm = ({
  isOpen,
  modalTitle,
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
      linkText={linkText}
      openModal={openModal}
      onClose={onClose}
    >
      <form name={formName} onSubmit={onSubmit}>
        {children}
      </form>
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
