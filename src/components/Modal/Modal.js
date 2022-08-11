import "./Modal.css";

const Modal = ({
  isOpen,
  modalTitle,
  children,
}) => {
  return (
    <div className={`modal ${isOpen && "modal_open"}`}>
      <div className="modal__container">
        <button className="close-button"></button>
        <p className="modal__title">{"title" || modalTitle}</p>
        {children}
      </div>
    </div>
  );
};

export default Modal;
