import * as React from 'react';

export const ReactLogo = () => (<>
  <div className='react-logo-container'>
    <div className='react-logo'>
      <div className='nuclei'></div>
    </div>
  </div>
</>);


export const BeatingHeart = () => (<>
  <i id='heart' className='fa fa-heart text-danger' />
</>);


export const RollingEyes = () => (<>
  <span className="eye-container">
    <span className="eye"></span>
    <span className="eye"></span>
  </span>
</>);


export const Screen = ({
  children
}: React.HTMLAttributes<HTMLDivElement>) => (<>
  <div className='screen'>{children}</div>
</>);


export const Loader = (props: LoaderProps): JSX.Element => (<>
  <div
    className="loader-wrapper"
    style={{ display: props.show ? 'flex' : 'none' }}
  >

    <div className={`loader loader-${props.size || 'sm'}`}></div>
    &nbsp;&nbsp;&nbsp;
    <span>{props.children}</span>

  </div>
</>);

export const InfoBox = (props: InfoboxProps): JSX.Element => {

  const style = {
    ...props.style,
    animation: props.animate ? '.7s ease-out 0s 1 vintage-display' : '',
  }

  const vintage = props.vintage || false;

  return (<>
    <div
      style={style}
      className={`info-box ${vintage ? 'vintage' : ''}`}
    >

      <span className='info-head'>
        {vintage && (
          <span className='info-prompt'>
            {'root@root~:'}&nbsp;
          </span>
        )}

        <span className='info-title'>{ props.title } </span>

        {vintage && <span className='blinking'>{'_'}</span>}

      </span>

      <div className="container-fluid" style={{ margin: '1rem auto' }}>
        {props.children}
      </div>

    </div>
  </>);
}

export const ModalBox = (props: ModalBoxProps): JSX.Element =>  {

  const handleClose = (e: React.MouseEvent<HTMLElement>) => (
    (e.target === e.currentTarget) && props.closeFunc()
  )

  const style: React.CSSProperties = Object.assign(
    {},
    { backgroundColor: `rgba(0, 0, 0, ${props.dimmness || '.6'})` },
    { display: props.show ? 'block' : 'none' }
  );

  return (<>
    <div onClick={handleClose} style={style} className="modal">

      <div className="modal-content">
        {props.children}
      </div>
      
    </div>
  </>);
}




