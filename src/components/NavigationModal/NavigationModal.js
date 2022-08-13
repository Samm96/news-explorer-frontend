import './NavigationModal.css';
import Logo from '../Logo/Logo';

const NavigationModal = () => {
    return (
        <div className="nav-modal">
            <div className="nav-modal__container">
                <Logo logoColor={"white"}/>
                <button className="nav-modal__close-button"></button>
            </div>
        </div>
    )
}

export default NavigationModal;