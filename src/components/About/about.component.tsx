import React from 'react';
import StyledAbout, { Pre } from './about.style';

import { BlockCursor } from '../../styles/global.style';
import { useAutoTyper } from '../../utils/hooks';
import { WARPGATE_ACTION_TIME, ABOUTME } from '../../configs';


interface AboutProps extends React.HTMLAttributes<HTMLElement> {
  autoType?: boolean
}

const About: React.FC<AboutProps> = ({ autoType = false, ...props }) => {
  const promptText = useAutoTyper(
    ABOUTME,
    (WARPGATE_ACTION_TIME * 2) + 1000,
    autoType ? 0 : ABOUTME.length - 1
  );

  return (<>
    <StyledAbout {...props} id={'about'}>
      <Pre>
        <h2 style={{ margin: '0' }}>
          <pre style={{ fontFamily: 'monospace', margin: '0' }}>
{` __                _ ____    
|  |   _ _ ___ _ _|_|    \\   
|  |__| | |  _| | | |  |  |  
|_____|_  |___|___|_|____/   
      |___|                  
`}
          </pre>
        </h2>
        <br />
        {promptText}{autoType && <BlockCursor />}
      </Pre>
    </StyledAbout>
  </>);
}

export default About;

