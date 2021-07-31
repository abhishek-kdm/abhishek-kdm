import React from 'react';
import StyledModal, { ModalContent, ModalCloseButton } from './modal.style';

interface ModalProps extends React.DialogHTMLAttributes<HTMLDialogElement> {}

const Modal = React.forwardRef<HTMLDialogElement, ModalProps>(
  ({ children, ...props }, ref) => {
    return (
      <>
        <StyledModal ref={ref} {...props}>
          <ModalContent method='dialog'>
            <ModalCloseButton>&times;</ModalCloseButton>
            {children}
          </ModalContent>
        </StyledModal>
      </>
    );
  }
);

export default Modal;
