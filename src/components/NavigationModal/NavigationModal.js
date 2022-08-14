import "./NavigationModal.css";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import whiteIcon from "../../images/Icons/button-icon-white.svg";

const NavigationModal = ({
  isOpen,
  onClose,
  openLoginModal,
  isLoggedIn,
  userName,
}) => {

  return (
    <div
      className={`nav-modal nav-modal__overlay ${isOpen && "nav-modal_open"}`}
    >
      <div className="nav-modal__container">
        <div className="nav-modal__header-container">
          <Logo logoColor={"white"} />
          <button
            className="nav-modal__close-button"
            onClick={onClose}
          ></button>
        </div>
        <div className="nav-modal__link-container">
          <NavLink
            to="/"
            className={
              isLoggedIn
                ? `nav-modal__link nav-modal__link_type_loggedin`
                : "nav-modal__link"
            }
          >
            Home
          </NavLink>
          {isLoggedIn ? (
            <>
              <NavLink to="/saved-articles" className="nav-modal__link">
                Saved articles
              </NavLink>
              <button className="nav-modal__button-user">
                <img
                  className="nav-modal__button-img"
                  src={whiteIcon}
                  alt="signout"
                />
              </button>
            </>
          ) : (
            <button className="nav-modal__button" onClick={openLoginModal}>
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationModal;
