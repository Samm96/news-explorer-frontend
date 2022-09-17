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
  onChange,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      modalTitle={modalTitle}
      linkText={linkText}
      openModal={openModal}
      onClose={onClose}
    >
      <div className="modal-form">
        <form
          name={formName}
          onSubmit={onSubmit}
          onChange={onChange}
          noValidate
        >
          {children}
        </form>
        <p className={`modal-form__text`}>
          or{" "}
          <button className="modal-form__link" onClick={openModal}>
            {linkText}
          </button>
        </p>
      </div>
    </Modal>
  );
};

export default ModalWithForm;
