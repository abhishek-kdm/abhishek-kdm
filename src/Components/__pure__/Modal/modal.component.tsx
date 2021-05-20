import React from 'react';
import {
  ModalToggler,
  ModalContainer,
  ModalContent,
  ModalCloseButton
} from './modal.style';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> { }

const Modal: React.FC<ModalProps> = ({ id, children }) => {
  return (<>
    <ModalToggler id={id} />
    <ModalContainer>
      <ModalContent>
        <ModalCloseButton htmlFor={id}>
          <FontAwesomeIcon icon={faTimes} />
        </ModalCloseButton>
        {children}
      </ModalContent>
    </ModalContainer>
  </>);
}

export default Modal;
