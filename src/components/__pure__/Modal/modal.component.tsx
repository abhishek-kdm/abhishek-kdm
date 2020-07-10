import React, { useCallback, useEffect } from 'react';
import StyledModal, { ModalContent } from './modal.style';


interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  show?: boolean
  opacity?: number,
  offset?: string,
  closeFunc: () => void
}

const Modal: React.FC<ModalProps> = ({
  show = false,
  opacity = .6,
  offset = '100px',
  closeFunc,
  ...props
}) => {
  const handleClose = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) { closeFunc(); }
  }, [closeFunc]);

  useEffect(() => {
    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.which === 27 && show) { closeFunc(); }
    };

    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    }
  }, [show, closeFunc]);

  if (show) {
    return (
      <StyledModal offset={offset} opacity={opacity} onClick={handleClose}>
        <ModalContent {...props} />
      </StyledModal>
    );
  }

  return null;
}

export default Modal;

