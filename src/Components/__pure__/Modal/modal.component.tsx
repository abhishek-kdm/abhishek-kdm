import React from 'react';
import StyledModal, { ModalContent, ModalCloseButton } from './modal.style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface ModalProps extends React.DialogHTMLAttributes<HTMLDialogElement> {}

const Modal = React.forwardRef<HTMLDialogElement, ModalProps>(
  ({ children, ...props }, ref) => {
    return (
      <>
        <StyledModal ref={ref} {...props}>
          <ModalContent method="dialog">
            <ModalCloseButton>
              <FontAwesomeIcon icon={faTimes} />
            </ModalCloseButton>
            {children}
          </ModalContent>
        </StyledModal>
      </>
    );
  }
);

export default Modal;
