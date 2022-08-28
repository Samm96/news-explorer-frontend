import "./Header.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

const Header = ({
  isLoggedIn,
  logoColor,
  textColor,
  openLoginModal,
  openMobileModal,
  onLogout,
  username
}) => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo logoColor={logoColor} />
        <Navigation
          isLoggedIn={isLoggedIn}
          textColor={textColor}
          onLogout={onLogout}
          openLoginModal={openLoginModal}
          openMobileModal={openMobileModal}
          username={username}
        />
      </div>
    </header>
  );
};

export default Header;
