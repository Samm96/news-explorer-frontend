import "./Navigation.css";
import { NavLink } from "react-router-dom";
import blackIcon from "../../images/Icons/button-icon.svg";
import whiteIcon from "../../images/Icons/button-icon-white.svg";


const Navigation = (isLoggedIn, userName) => {
  return (
    <nav className="navigation">
      <ul className="navigation__container">
        {/* <li className="navigation__link">
          <NavLink to="/" className="navigation__home" aria-label="nav link">Home</NavLink>
        </li>
        <li>
          <button className="navigation__button">Sign in</button>
        </li> */}
        <li className="navigation__link">
          <NavLink to="/" className="navigation__home" aria-label="nav link">Home</NavLink>
        </li>
        <li className="navigation__link">
            <NavLink to="/saved-news" className="navigation__saved-articles" aria-label="nav link">Saved articles</NavLink>
        </li>
        <li>
          <button className="navigation__button">User's Name<img className="navigation__button-img" src={whiteIcon} alt='signout'/></button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;