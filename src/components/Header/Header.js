import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

const Header = ({isLoggedIn, logoColor, userName}) => {

    return (
        <div className="header">
            <div className="header__container">
                <Logo logoColor={logoColor}/>
                <Navigation isLoggedIn={isLoggedIn}/>
            </div>
        </div>
    )
}

export default Header;