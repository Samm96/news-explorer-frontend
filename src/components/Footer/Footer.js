import "./Footer.css";
import { NavLink } from "react-router-dom";

const scrollUp = () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; 2022 Supersite, Powered by News API
      </p>
      <div className="footer__container">
        <NavLink onClick={scrollUp} to="/" className="footer__home">
          Home
        </NavLink>
        <a
          className="footer__text"
          target="__blank"
          href="https://practicum.com/"
        >
          Practicum by Yandex
        </a>
        <div className="footer__link-container">
          <a
            className="footer__link"
            href="https://github.com/Samm96"
            target="__blank"
            alt="GitHub Icon"
          >
            GitHub Icon
          </a>
          <a
            className="footer__link"
            href="https://www.facebook.com/"
            target="__blank"
            alt="Facebook Icon"
          >
            Facebook Icon
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
