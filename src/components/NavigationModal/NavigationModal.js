import "./NavigationModal.css";
import "../Navigation/Navigation.css";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
// import React, { useContext } from "react";
import whiteIcon from "../../images/Icons/button-icon-white.svg";
// import CurrentUserContext from "../../contexts/CurrentUserContext";

const NavigationModal = ({
  isOpen,
  onClose,
  openLoginModal,
  isLoggedIn,
  onLogout,
}) => {
  // const { currentUser } = useContext(CurrentUserContext);
  const placeholder = "Samantha";

  return (
    <div className={`nav-modal ${isOpen && "nav-modal_open"}`}>
      <div className="nav-modal__overlay">
        <div className="navigation__container navigation__container_type_modal">
          <div className="nav-modal__header-container">
            <Logo logoColor={"white"} />
            <button
              className="close-button close-button_type_mobile"
              onClick={onClose}
            ></button>
          </div>
          <div className="nav-modal__link-container">
            <NavLink
              to="/"
              className={
                isLoggedIn
                  ? `navigation__link navigation__link_type_modal navigation__link_type_loggedin`
                  : "navigation__link navigation__link_type_modal"
              }
            >
              Home
            </NavLink>
            {isLoggedIn ? (
              <>
                <NavLink
                  to="/saved-news"
                  className="navigation__link navigation__link_type_modal"
                  onClick={onClose}
                >
                  Saved articles
                </NavLink>
                <button
                  className="navigation__button navigation__button_type_modal navigation__button_type_user"
                  onClick={onLogout}
                >
                  {placeholder}
                  <img
                    className="navigation__button-img navigation__button-img_type_modal"
                    src={whiteIcon}
                    alt="signout"
                  />
                </button>
              </>
            ) : (
              <button className="navigation__button navigation__button_type_modal" onClick={openLoginModal}>
                Sign in
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationModal;
