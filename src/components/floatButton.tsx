import * as React from 'react';
import { RollingEyes } from './ui-components';

const { useEffect } = React;




const FloatButton = (props: FloatButtonProps): JSX.Element => {

  const Tooltip = ({ text }: { text: string }) => (<>
    <span className='tooltip-text'>{text}</span>
  </>);


  return (<>
    <button
      onClick={props.onClick}
      className={`${props.className || ''} float tooltip-parent`}
    >
      {props.tooltip &&  <Tooltip text={props.tooltip} />}
      <i style={{ color: '#00E640' }} className="fab fa-3x fa-github"></i>
      <RollingEyes />
    </button>
  </>);
}


export default FloatButton;
