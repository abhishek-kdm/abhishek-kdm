import React from 'react';

const Neutron = ({}) => (
  <div className={'neutron'}>
    <span className={'neutron-atom'}></span>
    <div style={{ transform: 'scale(.4, 1.6)', position: 'absolute' }}>
      <div className='orbit-reversed'></div>
    </div>
    <div style={{ transform: 'scale(2, .4)', position: 'absolute' }}>
      <div className='orbit'></div>
    </div>
    <div style={{ transform: 'skewX(45deg)', position: 'absolute' }}>
      <div className='orbit'></div>
    </div>
    <div style={{ transform: 'skewX(-45deg)', position: 'absolute' }}>
      <div className='orbit-reversed'></div>
    </div>
  </div>
);

export default Neutron;