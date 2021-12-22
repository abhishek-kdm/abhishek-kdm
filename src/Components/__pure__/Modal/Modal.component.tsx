import React, { useRef, useEffect, useState, useContext } from 'react';
import StyledModal, { ModalContent, ModalCloseButton } from './Modal.style';
import { GlobalContext } from '../../../Utils';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  show?: boolean;
  closeFunc: () => void;
}

const Modal: React.FC<ModalProps> = ({
  children,
  show = false,
  closeFunc,
  ...props
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [zIndex, setZIndex] = useState<number>(0);
  const { windowState } = useContext(GlobalContext) as ScreenState;

  useEffect(() => {
    setZIndex((index) =>
      show
        ? windowState.windows.reduce(
            (n, { style }) => Math.max(n, Number(style?.zIndex || 0)),
            999
          )
        : index
    );

    if (show) {
      const handler = ({ key }: KeyboardEvent) =>
        key.toLowerCase() === 'escape' && closeFunc();

      document.addEventListener('keydown', handler);
      return () => document.removeEventListener('keydown', handler);
    }
  }, [show]);

  return show ? (
    <>
      <StyledModal
        style={{ zIndex }}
        ref={modalRef}
        onClick={({ target }) => target === modalRef.current && closeFunc()}
      >
        <ModalContent {...props}>
          <ModalCloseButton onClick={closeFunc}>&times;</ModalCloseButton>
          {children}
        </ModalContent>
      </StyledModal>
    </>
  ) : null;
};

export default Modal;
