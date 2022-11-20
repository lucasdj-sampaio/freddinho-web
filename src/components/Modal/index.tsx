import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {
  BackgroundModal,
  ModalContent,
  ModalHeader,
  ModalImg,
  StyledModal,
} from './styles';
//@ts-ignore
import Img from '../../../public/img/elefante_triste.png';

const Modal = ({ onClose, children }) => {
  return (
    <BackgroundModal>
      <StyledModal>
        <ModalHeader>
          <AiOutlineCloseCircle onClick={onClose} />
        </ModalHeader>

        <ModalImg>
          <img src={Img} />
        </ModalImg>

        <ModalContent>
          <div className="contentChildren">{children}</div>
        </ModalContent>
      </StyledModal>
    </BackgroundModal>
  );
};

export default Modal;
