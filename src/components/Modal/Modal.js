import "./Modal.css";

const Modal = ({ isOpen, modalTitle, children, isSuccess, onClose }) => {
  return (
    <div className={`modal ${isOpen && "modal_open modal_overlay"}`}>
      <div className="modal__container">
        <button className="close-button" onClick={onClose}></button>
        <p
          className={
            isSuccess
              ? "modal__title modal__title_type_success"
              : "modal__title"
          }
        >
          {modalTitle}
        </p>
        {children}
      </div>
    </div>
  );
};

export default Modal;
