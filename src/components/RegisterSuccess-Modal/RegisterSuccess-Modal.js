import Modal from '../Modal/Modal';

const RegisterSuccessModal = ({isOpen, openModal}) => {
    return (
        <Modal 
            isOpen={isOpen}
            isSuccess={true}
            modalTitle="Registration successfully completed!"
        >
            <>
                <button className="modal__link" onClick={openModal}>Sign in</button>
            </>
        </Modal>
    )
}

export default RegisterSuccessModal;