import "./Modal.css";

const Modal = ({ isOpen, modalTitle, isButton, buttonText, linkText, openModal, children }) => {
  return (
    // <div className={`modal ${isOpen && "modal_open"}`}>
    <div className="modal modal_open">
      <div className="modal__container">
        <button className="close-button"></button>
        <p className="modal__title">{"title" || modalTitle}</p>
        {children}
        {/* {isButton ? ( */}
          <button className="modal__button">{"button" || buttonText}</button>
        {/* ) : (
          ""
        )} */}
        <button className="modal__link" onClick={openModal}>{"link" || linkText}</button>
      </div>
    </div>
  );
};

export default Modal;
