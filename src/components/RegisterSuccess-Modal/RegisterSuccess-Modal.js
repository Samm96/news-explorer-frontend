import Modal from '../Modal/Modal';

const RegisterSuccessModal = ({isOpen, openModal, onClose}) => {
    return (
        <Modal 
            isOpen={isOpen}
            isSuccess={true}
            modalTitle="Registration successfully completed!"
            onClose={onClose}
        >
            <>
                <button className="modal__link" onClick={openModal}>Sign in</button>
            </>
        </Modal>
    )
}

export default RegisterSuccessModal;