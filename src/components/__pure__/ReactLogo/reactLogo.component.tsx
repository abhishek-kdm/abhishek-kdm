import React from 'react';
import './reactLogo.style.css';


interface ReactLogoProps { }

const ReactLogoBlue = '#61DAFB';

const reactRingProps = {
  cx: '50', cy: '50',
  rx: '14', ry: '40',
  stroke: ReactLogoBlue, strokeWidth: 2, fill: 'none',
};

const ReactLogo: React.FC<ReactLogoProps> = () => (<>
  <div className='react-logo-container'>
    <svg viewBox='0 0 100 100'>
      <circle cx='50' cy='50' r='9' fill={ReactLogoBlue} stroke='none' />
      <g>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type='rotate'
          from='0 50 50'
          to='360 50 50'
          dur='5s'
          repeatCount='indefinite'
        />

        <ellipse {...reactRingProps} />
        <ellipse {...reactRingProps} transform='rotate(60 50 50)' />
        <ellipse {...reactRingProps} transform='rotate(-60 50 50)' />
      </g>
    </svg>
  </div>
</>);

export default ReactLogo;


