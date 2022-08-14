import "./NavigationModal.css";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";

const NavigationModal = ({ isOpen, onClose, openLoginModal }) => {
  return (
    <div className={`nav-modal nav-modal__overlay ${isOpen && "nav-modal_open"}`}>
      <div className="nav-modal__container">
        <div className="nav-modal__header-container">
          <Logo logoColor={"white"} />
          <button className="nav-modal__close-button" onClick={onClose}></button>
        </div>
        <div className="nav-modal__link-container">
          <NavLink to="/" className="nav-modal__link">
            Home
          </NavLink>
          <button className="nav-modal__button" onClick={openLoginModal}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationModal;
