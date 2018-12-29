import * as React from 'react';

interface IModalBoxProps {
  show?: boolean,
  dimmness?: string,
  closeFunc?: () => void,
  children?: JSX.Element,
};

const ModalBox = (props: IModalBoxProps): JSX.Element =>  {

  const handleClose = (e: React.MouseEvent<HTMLElement>) => (
    (e.target === e.currentTarget) && props.closeFunc()
  )

  const style: React.CSSProperties = Object.assign(
    {},
    { backgroundColor: `rgba(0, 0, 0, ${props.dimmness || '.6'})` },
    { display: props.show ? 'block' : 'none' }
  );

  return (
    <div onClick={handleClose} style={style} className="modal">

      <div className="modal-content">
        {props.children}
      </div>
      
    </div>
  )
}

export default ModalBox;
