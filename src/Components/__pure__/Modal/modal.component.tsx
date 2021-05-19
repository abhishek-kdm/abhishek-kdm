import React from 'react';
import StyledModal, { ModalCloseButton, ModalContainer, ModalToggler } from './modal.style';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> { }

const Modal: React.FC<ModalProps> = ({ id, children }) => {
  return (<>
    <ModalToggler id={id} />
    <ModalContainer>
      <StyledModal>
        <ModalCloseButton htmlFor={id}>
          <FontAwesomeIcon icon={faTimes} />
        </ModalCloseButton>
        {children}
      </StyledModal>
    </ModalContainer>
  </>);
}

export default Modal;
