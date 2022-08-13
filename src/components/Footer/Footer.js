import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__copyright">
        &copy; 2022 Supersite, Powered by News API
      </p>
      <div className="footer__container">
        <NavLink to="/" className="footer__home">
          Home
        </NavLink>
        <p className="footer__text">Practicum by Yandex</p>
        <div className="footer__link-container">
          <button className="footer__link" alt="GitHub Icon"></button>
          <button className="footer__link" alt="Facebook Icon"></button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
