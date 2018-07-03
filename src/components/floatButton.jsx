import React from 'react';

const FloatButton = (props) =>  {
  return (
    <button onClick={props.onClick} className='float tooltip-parent'>
      { props.tooltip && 
        <span className='tooltip-text'>{props.tooltip}</span>
      }
      <i style={{ color: '#00E640' }} className="fa fa-3x fa-github"></i>
      <span className="eye-container">
        <span className="eye"></span>
        <span className="eye"></span>
      </span>
    </button>
  )
}

export default FloatButton;