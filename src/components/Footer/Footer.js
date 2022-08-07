import "./Footer.css";
import { NavLink } from "react-router-dom";
import githubIcon from "../../images/Icons/github-icon_svg.svg";
import facebookIcon from "../../images/Icons/fb-icon_svg.svg";

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
          <a className="footer__link" href="*">
            <img className="footer__icon" src={githubIcon} alt="GitHub Icon" />
          </a>
          <a className="footer__link" href="*">
            <img
              className="footer__icon"
              src={facebookIcon}
              alt="Facebook Icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
