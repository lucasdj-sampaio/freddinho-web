import React from 'react';
import { Container } from '../atoms/Input/styles';
import { Content } from './styles';

const Modal = ({ onClose, children }) => {
    return (
        <Content>
            <div className='modal'>
                <button className='close' onClick={onClose} > X </button>
                <div className='contentChildren'>{children}</div>
            </div>
        </Content>

    )
};

export default Modal;