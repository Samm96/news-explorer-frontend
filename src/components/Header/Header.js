import './Header.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';

const Header = ({isLoggedIn, logoColor, homePage, userName}) => {

    return (
        <div className="header">
            <div className="header__container">
                <Logo logoColor={logoColor}/>
                <Navigation homePage={homePage} isLoggedIn={isLoggedIn}/>
            </div>
        </div>
    )
}

export default Header;