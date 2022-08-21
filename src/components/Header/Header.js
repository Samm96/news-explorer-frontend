import "./Header.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

const Header = ({
  isLoggedIn,
  logoColor,
  textColor,
  openSigninModal,
  openMobileModal,
  onLogout,
  username
}) => {
  return (
    <div className="header">
      <div className="header__container">
        <Logo logoColor={logoColor} />
        <Navigation
          isLoggedIn={isLoggedIn}
          textColor={textColor}
          onLogout={onLogout}
          openSigninModal={openSigninModal}
          openMobileModal={openMobileModal}
          username={username}
        />
      </div>
    </div>
  );
};

export default Header;
