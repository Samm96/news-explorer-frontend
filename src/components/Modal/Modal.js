import "./Modal.css";

const Modal = ({ isOpen, modalTitle, children, isSuccess }) => {
  return (
    <div className={`modal ${isOpen && "modal_open"}`}>
      <div className="modal__container">
        <button className="close-button"></button>
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
