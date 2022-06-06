import React from 'react';
import Button from '../Button/Button';
import './Modal.css'

const Modal = ({ title, content, isOpen, closeModal }) => {
    const texTitle = title
    const texContent = content

    return (
            <div className={`modal ${isOpen && `modal-open`}`}>
                <div className='button-close'>
                    <Button functional={closeModal} content={'X'} styles={'close'} />
                </div>
                <div className='modal-content'>
                    <h3>{texTitle}</h3>
                    <span>{texContent}</span>
                </div>
            </div>
    );
};

export default Modal;