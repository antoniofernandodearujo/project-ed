import React, { useState } from "react"
//styles
//react-modal
import Modal from "react-modal"
//component
import Button from "../../button";

const ModalInitial: React.FC = () => {

    const [showModal, setShowModal] = useState<boolean>(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <Button type={1} onClick={handleOpenModal} />
            <Modal
                isOpen={showModal}
                contentLabel="onRequestClose Example"
                onRequestClose={handleCloseModal}
            >
                <p>Modal text!</p>
                <button onClick={handleCloseModal}>Close Modal</button>
            </Modal>
        </div>
    )
}

export default ModalInitial