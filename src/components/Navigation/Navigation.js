import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = (isLoggedIn) => {
  return (
    <nav className="navigation">
      <ul className="navigation__container">
        <li className="navigation__link">
          <NavLink to="/" className="navigation__home" aria-label="nav link">Home</NavLink>
        </li>
        <li>
          <button className="navigation__signin">Sign in</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;