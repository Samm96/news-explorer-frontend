import React, { useState } from 'react';
import "./Navigation.css";
import { NavLink } from "react-router-dom";
// import blackIcon from "../../images/Icons/button-icon.svg";
import whiteIcon from "../../images/Icons/button-icon-white.svg";

const Navigation = ({isLoggedIn, userName, savedPage, homePage}) => {
  const placeholderUser = "Samantha";

  const whiteText = {
    signInButton: "navigation__button",
    homeButton: "navigation__home",
    savedArticles: "navigation__saved-articles",
  }

  const blackText = {
    signInButton: `${whiteText.signInButton} navigation__button_type_page`,
    homeButton: `${whiteText.homeButton} navigation__home_type_page`,
    savedArticles: `${whiteText.savedArticles} navigation__saved-articles_type_page`,
  }

  const whiteTextSelected = {
    savedArticles: `${whiteText.savedArticles} navigation__saved-articles_type_selected`,
    homeButton: `${whiteText.homeButton} navigation__home navigation__home_type_selected`,
  }

  const blackTextSelected = {
    savedArticles: `${blackText.savedArticles} navigation__saved-articles_type_selected-page`,
    homeButton: `${blackText.homeButton} navigation__home_type_selected-page`,
  }


  return (
    <nav className="navigation"> 
      {isLoggedIn ? (
        <ul className="navigation__container navigation__container_type_signedin">
          <li className="navigation__link">
            <NavLink to="/" className="navigation__home navigation__home_type_selected" aria-label="nav link">
              Home
            </NavLink>
          </li>
          <li className="navigation__link">
            <NavLink
              to="/saved-news"
              className="navigation__saved-articles"
              aria-label="nav link"
            >
              Saved articles
            </NavLink>
          </li>
          <li>
            <button className="navigation__button">
              {placeholderUser || userName}
              <img
                className="navigation__button-img"
                src={whiteIcon}
                alt="signout"
              />
            </button>
          </li>
        </ul>
      ) : (
        <ul className="navigation__container">
          <li className="navigation__link">
            <NavLink
              to="/"
              className="navigation__home navigation__home_type_selected"
              aria-label="nav link"
            >
              Home
            </NavLink>
          </li>
          <li>
            <button className="navigation__button">Sign in</button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
