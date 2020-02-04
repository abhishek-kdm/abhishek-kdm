import React, { useCallback, useMemo, useEffect } from 'react';
import './modal.style.css';


interface ModalProps {
  show?: boolean
  opacity?: number,
  closeFunc: () => void
}
 
const Modal: React.FC<ModalProps> = ({
  show = false,
  opacity = .6,
  closeFunc,
  children
}) => {

  const handleClose = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) { closeFunc(); }
  }, [closeFunc]);

  const style = useMemo(() => ({
    backgroundColor: `rgba(0, 0, 0, ${opacity})`,
    display: show ? 'block' : 'none'
  }), [opacity, show]);

  const keyDownHandler = useCallback((e) => {
    if (e.which === 27 && show) { closeFunc(); }
  }, [show, closeFunc]);

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    }
  });

  return (<>
    <div className='modal' style={style} onClick={handleClose}>
      <div className='modal-content'>{children}</div>
    </div>
  </>);
}
 
export default Modal;

