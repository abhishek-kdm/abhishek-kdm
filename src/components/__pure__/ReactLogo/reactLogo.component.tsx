import React from 'react';
import { ReactLogoContainer } from './reactLogo.style';


interface ReactLogoProps { }

const ReactLogoBlue = '#61DAFB';

const reactRingProps = {
  cx: '50', cy: '50',
  rx: '14', ry: '40',
  stroke: ReactLogoBlue, strokeWidth: 2, fill: 'none',
};

const ReactLogo: React.FC<ReactLogoProps> = () => (<>
  <ReactLogoContainer>
    <svg viewBox='0 0 100 100'>
      <circle cx='50' cy='50' r='9' fill={ReactLogoBlue} stroke='none' />
      <g>

        <ellipse {...reactRingProps} transform={'rotate(90 50 50)'} />
        <ellipse {...reactRingProps} transform={'rotate(35 50 50)'} />
        <ellipse {...reactRingProps} transform={'rotate(-35 50 50)'} />
      </g>
    </svg>
  </ReactLogoContainer>
</>);

export default ReactLogo;


