import "./Modal.css";
import { NavLink } from "react-router-dom";

const Modal = ({
  isOpen,
  modalTitle,
  isButton,
  buttonText,
  linkText,
  openModal,
  children,
}) => {
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
        
        {/* <p className="modal__text">
          or{" "}
          <button className="modal__link" onClick={openModal}>
            {"link" || linkText}
          </button>
        </p> */}
      </div>
    </div>
  );
};

export default Modal;
