import "./Navigation.css";
import { NavLink } from "react-router-dom";
import blackIcon from "../../images/Icons/button-icon.svg";
import whiteIcon from "../../images/Icons/button-icon-white.svg";

const Navigation = ({ isLoggedIn, userName, textColor }) => {
  const placeholderUser = "Samantha";

  const whiteText = {
    signInButton: "navigation__button",
    homeButton: "navigation__home",
    savedArticles: "navigation__saved-articles",
  };

  const blackText = {
    signInButton: "navigation__button_type_page",
    homeButton: "navigation__home_type_page",
    savedArticles: "navigation__saved-articles_type_page",
  };

  return (
    <nav className="navigation">
      {isLoggedIn ? (
        <ul className="navigation__container navigation__container_type_signedin">
          <li className="navigation__link">
            <NavLink
              to="/"
              className={
                textColor === "black"
                  ? `${whiteText.homeButton} ${blackText.homeButton}`
                  : `${whiteText.homeButton}`
              }
              aria-label="nav link"
            >
              Home
            </NavLink>
          </li>
          <li className="navigation__link">
            <NavLink
              to="/saved-news"
              className={
                textColor === "black"
                  ? `${whiteText.savedArticles} ${blackText.savedArticles}`
                  : `${whiteText.savedArticles}`
              }
              aria-label="nav link"
            >
              Saved articles
            </NavLink>
          </li>
          <li>
            <button
              className={
                textColor === "black"
                  ? `${whiteText.signInButton} ${blackText.signInButton}`
                  : `${whiteText.signInButton}`
              }
            >
              {placeholderUser || userName}
              <img
                className="navigation__button-img"
                src={textColor === "black" ? blackIcon : whiteIcon}
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
              className={
                textColor === "black"
                  ? `${whiteText.homeButton} ${blackText.homeButton}`
                  : `${whiteText.homeButton}`
              }
              aria-label="nav link"
            >
              Home
            </NavLink>
          </li>
          <li>
            <button
              className={
                textColor === "black"
                  ? `${whiteText.signInButton} ${blackText.signInButton}`
                  : `${whiteText.signInButton}`
              }
            >
              Sign in
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
